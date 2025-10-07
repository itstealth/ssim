import { dbPool } from "@/lib/db";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

async function ensureUploadsDirExists() {
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  try {
    await fs.access(uploadsDir);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(uploadsDir, { recursive: true });
    } else {
      throw error;
    }
  }
  return uploadsDir;
}

export async function GET() {
  let connection;
  try {
    connection = await dbPool.getConnection();

    const [events] = await connection.query(
      "SELECT id, title, description, created_at FROM events ORDER BY id"
    );

    if (!events || events.length === 0) {
      return NextResponse.json([]);
    }

    const eventsWithImages = [];

    for (const event of events) {
      const [images] = await connection.query(
        "SELECT image_path FROM event_images WHERE event_id = ? ORDER BY uploaded_at ASC",
        [event.id]
      );
      eventsWithImages.push({
        ...event,
        imagePaths: images.map((img) => img.image_path),
      });
    }

    return NextResponse.json(eventsWithImages);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { message: "Failed to fetch events.", error: error.message },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

export async function POST(request) {
  let connection;
  const successfullyWrittenFiles = [];

  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const title = formData.get("title");
    const description = formData.get("description");
    const eventImages = formData.getAll("eventImages");

    if (!id || !title || !description) {
      return NextResponse.json(
        { message: "Missing required event fields: id, title, description." },
        { status: 400 }
      );
    }

    const uploadsDir = await ensureUploadsDirExists();
    connection = await dbPool.getConnection();
    await connection.beginTransaction();

    const finalImagePathsForDB = [];

    if (eventImages && eventImages.length > 0) {
      const eventIdStr = String(id);
      const eventSpecificPath = path.join(uploadsDir, eventIdStr);
      await fs.mkdir(eventSpecificPath, { recursive: true });

      let existingFilesInDir = [];
      try {
        existingFilesInDir = await fs.readdir(eventSpecificPath);
      } catch (e) {
        console.error(
          `Error reading directory ${eventSpecificPath} for sequencing:`,
          e
        );
        throw new Error(
          `Server error: Could not read event directory for image sequencing.`
        );
      }

      let currentMaxSeq = 0;
      existingFilesInDir.forEach((f) => {
        const match = f.match(/^(\d+)\..+$/);
        if (match) {
          const num = parseInt(match[1], 10);
          if (num > currentMaxSeq) {
            currentMaxSeq = num;
          }
        }
      });

      let sequenceForThisBatch = currentMaxSeq + 1;

      for (const imageFile of eventImages) {
        if (imageFile instanceof File) {
          const extension = path.extname(imageFile.name);
          const newFilename = `${sequenceForThisBatch}${extension}`;
          const newFilePath = path.join(eventSpecificPath, newFilename);

          const fileBuffer = Buffer.from(await imageFile.arrayBuffer());
          await fs.writeFile(newFilePath, fileBuffer);
          successfullyWrittenFiles.push(newFilePath);

          const publicImagePath = `/uploads/${eventIdStr}/${newFilename}`;
          finalImagePathsForDB.push(publicImagePath);
          sequenceForThisBatch++;
        }
      }
    }

    const eventQuery =
      "INSERT INTO events (id, title, description) VALUES (?, ?, ?)";
    await connection.execute(eventQuery, [id, title, description]);

    const eventDataForResponse = {
      id,
      title,
      description,
      imagePaths: [],
    };

    if (finalImagePathsForDB.length > 0) {
      const imageInsertQuery =
        "INSERT INTO event_images (event_id, image_path) VALUES (?, ?)";
      for (const dbImagePath of finalImagePathsForDB) {
        await connection.execute(imageInsertQuery, [id, dbImagePath]);
        eventDataForResponse.imagePaths.push(dbImagePath);
      }
    }

    await connection.commit();
    return NextResponse.json(
      {
        message: "Event uploaded and saved successfully!",
        event: eventDataForResponse,
      },
      { status: 201 }
    );
  } catch (error) {
    if (connection) await connection.rollback();
    console.error(
      "Error saving event to database or processing images:",
      error
    );

    for (const filePath of successfullyWrittenFiles) {
      try {
        await fs.unlink(filePath);
      } catch (unlinkError) {
        console.error(
          "Error deleting successfully written file during rollback:",
          filePath,
          unlinkError
        );
      }
    }

    if (
      error.code === "ER_DUP_ENTRY" &&
      error.message.includes("events.PRIMARY")
    ) {
      return NextResponse.json(
        {
          message: "Conflict: Event with this ID already exists.",
          error: error.message,
        },
        { status: 409 }
      );
    }

    const clientMessage =
      error.message &&
      (error.message.startsWith("Failed to process") ||
        error.message.startsWith("Server error:"))
        ? error.message
        : "Failed to save event.";

    return NextResponse.json(
      { message: clientMessage, errorDetails: error.toString() },
      { status: 500 }
    );
  } finally {
    if (connection) connection.release();
  }
}

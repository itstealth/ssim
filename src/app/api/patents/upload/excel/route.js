import { createExcelUploadHandler } from "@/lib/research-datasets";

export const POST = createExcelUploadHandler("patents", "patentsExcelFile");

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableCell } from "@tiptap/extension-table-cell";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import { FontFamily } from "@tiptap/extension-font-family";
import Image from "@tiptap/extension-image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code as CodeIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Indent,
  Outdent,
  Quote,
  Link2,
  Table as TableIcon,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Braces,
  Undo,
  Redo,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  Palette,
  Minus,
  RemoveFormatting,
  Image as ImageIcon,
  FileText,
  Upload,
} from "lucide-react";

const TiptapToolbar = ({ editor }) => {
  const fileInputRef = useRef(null);
  const documentInputRef = useRef(null);

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({ onClick, isActive, children, title }) => (
    <Button
      type="button"
      onClick={onClick}
      variant={isActive ? "default" : "ghost"}
      size="icon"
      className="h-8 w-8"
      title={title}
    >
      {children}
    </Button>
  );

  // Handle image upload from file
  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    try {
      // Show loading state (optional - you can add a loading indicator)
      const formData = new FormData();
      formData.append("file", file);

      // Upload to Azure Blob Storage via API
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Upload failed");
      }

      const data = await response.json();

      // Insert image with the Azure Blob Storage URL
      editor.chain().focus().setImage({ 
        src: data.url,
        alt: data.fileName,
        title: data.fileName
      }).run();

    } catch (error) {
      console.error("Error uploading image:", error);
      alert(`Failed to upload image: ${error.message}`);
    }
    
    // Reset input so same file can be selected again
    event.target.value = "";
  };

  // Handle image insertion from URL
  const handleImageUrl = () => {
    const url = window.prompt("Enter image URL:");
    if (url && url.trim()) {
      editor.chain().focus().setImage({ 
        src: url.trim(),
        alt: "Image from URL"
      }).run();
    }
  };

  // Handle document/file upload
  const handleDocumentUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Upload to Azure Blob Storage via API
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Upload failed");
      }

      const data = await response.json();
      const fileName = data.fileName;
      const fileUrl = data.url;
      const fileExtension = fileName.split(".").pop()?.toUpperCase() || "FILE";
      
      // Insert as a styled paragraph with downloadable link
      const content = `<p><a href="${fileUrl}" download="${fileName}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; background-color: #dbeafe; border: 1px solid #93c5fd; border-radius: 0.375rem; color: #1e40af; text-decoration: none; font-weight: 500;">📄 <span>${fileExtension} - ${fileName}</span></a></p>`;
      
      editor.chain().focus().insertContent(content).run();

    } catch (error) {
      console.error("Error uploading document:", error);
      alert(`Failed to upload document: ${error.message}`);
    }
    
    // Reset input
    event.target.value = "";
  };

  // Handle document insertion from URL
  const handleDocumentUrl = () => {
    const url = window.prompt("Enter document URL:");
    if (url) {
      const fileName = url.split("/").pop() || "Download Document";
      const content = `<p><a href="${url}" target="_blank" rel="noopener noreferrer" download style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; background-color: #dbeafe; border: 1px solid #93c5fd; border-radius: 0.375rem; color: #1e40af; text-decoration: none; font-weight: 500;">📄 <span>${fileName}</span></a></p>`;
      editor.chain().focus().insertContent(content).run();
    }
  };

  // Get current block type
  const getCurrentBlockType = () => {
    if (editor.isActive("heading", { level: 1 })) return "h1";
    if (editor.isActive("heading", { level: 2 })) return "h2";
    if (editor.isActive("heading", { level: 3 })) return "h3";
    if (editor.isActive("heading", { level: 4 })) return "h4";
    if (editor.isActive("heading", { level: 5 })) return "h5";
    if (editor.isActive("heading", { level: 6 })) return "h6";
    if (editor.isActive("blockquote")) return "blockquote";
    if (editor.isActive("codeBlock")) return "pre";
    return "paragraph";
  };

  // Get current alignment
  const getCurrentAlignment = () => {
    if (editor.isActive({ textAlign: "left" })) return "left";
    if (editor.isActive({ textAlign: "center" })) return "center";
    if (editor.isActive({ textAlign: "right" })) return "right";
    if (editor.isActive({ textAlign: "justify" })) return "justify";
    return "left";
  };

  return (
    <div className="border-b border-input bg-muted/30 rounded-t-md p-2">
      {/* First Row */}
      <div className="flex flex-wrap gap-1 mb-2">
        {/* Undo/Redo */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            isActive={false}
            title="Undo (Ctrl+Z)"
          >
            <Undo className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            isActive={false}
            title="Redo (Ctrl+Y)"
          >
            <Redo className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Blocks Dropdown */}
        <div className="border-r pr-2">
          <Select
            value={getCurrentBlockType()}
            onValueChange={(value) => {
              switch (value) {
                case "paragraph":
                  editor.chain().focus().setParagraph().run();
                  break;
                case "h1":
                  editor.chain().focus().toggleHeading({ level: 1 }).run();
                  break;
                case "h2":
                  editor.chain().focus().toggleHeading({ level: 2 }).run();
                  break;
                case "h3":
                  editor.chain().focus().toggleHeading({ level: 3 }).run();
                  break;
                case "h4":
                  editor.chain().focus().toggleHeading({ level: 4 }).run();
                  break;
                case "h5":
                  editor.chain().focus().toggleHeading({ level: 5 }).run();
                  break;
                case "h6":
                  editor.chain().focus().toggleHeading({ level: 6 }).run();
                  break;
                case "blockquote":
                  editor.chain().focus().toggleBlockquote().run();
                  break;
                case "pre":
                  editor.chain().focus().toggleCodeBlock().run();
                  break;
              }
            }}
          >
            <SelectTrigger className="h-8 w-[140px]">
              <SelectValue placeholder="Blocks" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="paragraph">Paragraph</SelectItem>
              <SelectItem value="h1">Heading 1</SelectItem>
              <SelectItem value="h2">Heading 2</SelectItem>
              <SelectItem value="h3">Heading 3</SelectItem>
              <SelectItem value="h4">Heading 4</SelectItem>
              <SelectItem value="h5">Heading 5</SelectItem>
              <SelectItem value="h6">Heading 6</SelectItem>
              <SelectItem value="blockquote">Blockquote</SelectItem>
              <SelectItem value="pre">Pre (Code Block)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Alignment Dropdown */}
        <div className="border-r pr-2">
          <Select
            value={getCurrentAlignment()}
            onValueChange={(value) => {
              editor.chain().focus().setTextAlign(value).run();
            }}
          >
            <SelectTrigger className="h-8 w-[120px]">
              <SelectValue placeholder="Alignment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="left">Align Left</SelectItem>
              <SelectItem value="center">Align Center</SelectItem>
              <SelectItem value="right">Align Right</SelectItem>
              <SelectItem value="justify">Justify</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Font Family */}
        <div className="border-r pr-2">
          <Select
            value={editor.getAttributes("textStyle").fontFamily || "default"}
            onValueChange={(value) => {
              if (value === "default") {
                editor.chain().focus().unsetFontFamily().run();
              } else {
                editor.chain().focus().setFontFamily(value).run();
              }
            }}
          >
            <SelectTrigger className="h-8 w-[140px]">
              <SelectValue placeholder="Font" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="Arial">Arial</SelectItem>
              <SelectItem value="Georgia">Georgia</SelectItem>
              <SelectItem value="'Times New Roman'">Times New Roman</SelectItem>
              <SelectItem value="'Courier New'">Courier New</SelectItem>
              <SelectItem value="Verdana">Verdana</SelectItem>
              <SelectItem value="'Comic Sans MS'">Comic Sans</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Headings */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            isActive={editor.isActive("heading", { level: 1 })}
            title="Heading 1"
          >
            <Heading1 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            isActive={editor.isActive("heading", { level: 2 })}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            isActive={editor.isActive("heading", { level: 3 })}
            title="Heading 3"
          >
            <Heading3 className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Text Formatting */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            isActive={editor.isActive("bold")}
            title="Bold (Ctrl+B)"
          >
            <Bold className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            isActive={editor.isActive("italic")}
            title="Italic (Ctrl+I)"
          >
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            isActive={editor.isActive("underline")}
            title="Underline (Ctrl+U)"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleStrike().run()}
            isActive={editor.isActive("strike")}
            title="Strikethrough"
          >
            <Strikethrough className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Superscript & Subscript */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            isActive={editor.isActive("superscript")}
            title="Superscript"
          >
            <SuperscriptIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            isActive={editor.isActive("subscript")}
            title="Subscript"
          >
            <SubscriptIcon className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Colors */}
        <div className="flex gap-1 border-r pr-2">
          <div className="flex items-center gap-1">
            <label className="flex items-center cursor-pointer" title="Text Color">
              <input
                type="color"
                className="h-8 w-8 cursor-pointer rounded border border-input"
                value={editor.getAttributes("textStyle").color || "#000000"}
                onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
              />
            </label>
            <ToolbarButton
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              isActive={editor.isActive("highlight")}
              title="Highlight"
            >
              <Highlighter className="h-4 w-4" />
            </ToolbarButton>
          </div>
        </div>

        {/* Clear Formatting */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => {
              editor.chain().focus().clearNodes().unsetAllMarks().run();
            }}
            isActive={false}
            title="Clear Formatting"
          >
            <RemoveFormatting className="h-4 w-4" />
          </ToolbarButton>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap gap-1">
        {/* Text Alignment */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            isActive={editor.isActive({ textAlign: "left" })}
            title="Align Left"
          >
            <AlignLeft className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            isActive={editor.isActive({ textAlign: "center" })}
            title="Align Center"
          >
            <AlignCenter className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            isActive={editor.isActive({ textAlign: "right" })}
            title="Align Right"
          >
            <AlignRight className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            isActive={editor.isActive({ textAlign: "justify" })}
            title="Justify"
          >
            <AlignJustify className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Lists */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            isActive={editor.isActive("bulletList")}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            isActive={editor.isActive("orderedList")}
            title="Numbered List"
          >
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
            isActive={false}
            title="Increase Indent"
          >
            <Indent className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().liftListItem("listItem").run()}
            isActive={false}
            title="Decrease Indent"
          >
            <Outdent className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Code & Quote */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCode().run()}
            isActive={editor.isActive("code")}
            title="Inline Code"
          >
            <CodeIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            isActive={editor.isActive("codeBlock")}
            title="Code Block"
          >
            <Braces className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            isActive={editor.isActive("blockquote")}
            title="Blockquote"
          >
            <Quote className="h-4 w-4" />
          </ToolbarButton>
        </div>

        {/* Link, Image, Table & HR */}
        <div className="flex gap-1 border-r pr-2">
          <ToolbarButton
            onClick={() => {
              const url = window.prompt("Enter URL");
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }}
            isActive={editor.isActive("link")}
            title="Insert Link"
          >
            <Link2 className="h-4 w-4" />
          </ToolbarButton>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                title="Insert Image"
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
                <Upload className="h-4 w-4 mr-2" />
                Upload from Computer
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleImageUrl}>
                <Link2 className="h-4 w-4 mr-2" />
                Insert from URL
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                title="Insert Document/File"
              >
                <FileText className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => documentInputRef.current?.click()}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleDocumentUrl}>
                <Link2 className="h-4 w-4 mr-2" />
                Link to Document
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            ref={documentInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar"
            className="hidden"
            onChange={handleDocumentUpload}
          />
        </div>

        {/* Table & HR */}
        <div className="flex gap-1">
          <ToolbarButton
            onClick={() =>
              editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            }
            isActive={false}
            title="Insert Table"
          >
            <TableIcon className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            isActive={false}
            title="Horizontal Rule"
          >
            <Minus className="h-4 w-4" />
          </ToolbarButton>
        </div>
      </div>
    </div>
  );
};

export const RichTextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'tiptap-ordered-list',
          },
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'tiptap-bullet-list',
          },
        },
        listItem: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "div"],
      }),
      TextStyle,
      FontFamily,
      Color,
      Underline,
      Strike,
      Code,
      CodeBlock,
      Blockquote,
      Subscript,
      Superscript,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-purple-500 underline cursor-pointer",
        },
      }),
      Highlight.configure({
        multicolor: false,
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: "rounded-md max-w-full h-auto my-4",
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "max-w-none p-5 focus:outline-none min-h-[300px] text-base leading-relaxed",
      },
    },
    parseOptions: {
      preserveWhitespace: 'full',
    },
  });

  if (!editor) {
    return (
      <div className="border border-input bg-background rounded-md overflow-hidden p-5 min-h-[300px] flex items-center justify-center text-muted-foreground">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="border border-input bg-background rounded-md overflow-hidden">
      <TiptapToolbar editor={editor} />
      
      {/* Helper Banner for Lists */}
      {(editor.isActive('bulletList') || editor.isActive('orderedList')) && (
        <div className="bg-purple-50 border-b border-purple-200 px-4 py-2 text-sm text-purple-700">
          <span className="font-semibold">💡 List Tips:</span>{" "}
          <kbd className="px-2 py-0.5 bg-white border border-purple-300 rounded text-xs">Enter</kbd> = new item | {" "}
          <kbd className="px-2 py-0.5 bg-white border border-purple-300 rounded text-xs">Shift+Enter</kbd> = add paragraph | {" "}
          <kbd className="px-2 py-0.5 bg-white border border-purple-300 rounded text-xs">Tab</kbd> = indent/nest | {" "}
          <kbd className="px-2 py-0.5 bg-white border border-purple-300 rounded text-xs">Shift+Tab</kbd> = outdent
        </div>
      )}
      
      <EditorContent editor={editor} className="max-h-[500px] overflow-y-auto" />
    </div>
  );
};

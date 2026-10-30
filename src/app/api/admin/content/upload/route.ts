import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getPortfolioAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);
const maximumSize = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const supabase = await getPortfolioAdminClient();
  if (!supabase) return NextResponse.json({ error: "Not authorized." }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file");
  const collection = formData.get("collection");
  if (!(file instanceof File) || (collection !== "projects" && collection !== "certificates")) {
    return NextResponse.json({ error: "Choose an image and a valid content type." }, { status: 400 });
  }

  const extension = allowedTypes.get(file.type);
  if (!extension) {
    return NextResponse.json({ error: "Upload a JPG, PNG, or WebP image." }, { status: 400 });
  }
  if (file.size === 0 || file.size > maximumSize) {
    return NextResponse.json({ error: "Images must be smaller than 5 MB." }, { status: 400 });
  }

  const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const isValidImage =
    (file.type === "image/jpeg" && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) ||
    (file.type === "image/png" && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) ||
    (file.type === "image/webp" &&
      String.fromCharCode(...bytes.slice(0, 4)) === "RIFF" &&
      String.fromCharCode(...bytes.slice(8, 12)) === "WEBP");
  if (!isValidImage) {
    return NextResponse.json({ error: "The file content does not match a supported image format." }, { status: 400 });
  }

  const path = `${collection}/${randomUUID()}.${extension}`;
  const { error } = await supabase.storage
    .from("portfolio-media")
    .upload(path, file, { contentType: file.type, cacheControl: "31536000", upsert: false });

  if (error) {
    console.error("Unable to upload portfolio image:", error.message);
    return NextResponse.json({ error: "Unable to upload image. Check the Storage setup and try again." }, { status: 503 });
  }

  const { data } = supabase.storage.from("portfolio-media").getPublicUrl(path);
  return NextResponse.json({ imageUrl: data.publicUrl });
}

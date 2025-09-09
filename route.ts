import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Path to the JSON file
const filePath = path.join(process.cwd(), "public", "data", "page.json");


// Handle GET request
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const contentId = searchParams.get("contentId"); 
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      `${contentId}.json`
    );

    if (!fs.existsSync(filePath)) {
      // If file doesn't exist, create it with an empty array
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify([]));
    }
    fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(fileContent));
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json({});
  }
}

// Handle POST request
export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);

  const contentId = searchParams.get("contentId"); 

  const updatedData: any = await req.json();

   const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      `${contentId}.json`
    );
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
  return NextResponse.json({ message: "Pages updated successfully" });
}

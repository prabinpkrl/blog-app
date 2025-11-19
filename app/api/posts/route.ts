import { NextRequest, NextResponse } from "next/server";
import sql from "@/lib/db";

type DBPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image_url: string | null;
  image_alt: string | null;
  created_at: string;
};

function mapPostRowToBlogPost(row: DBPost) {
  return {
    id: row.slug,
    title: row.title,
    description: row.description,
    image: row.image_url
      ? { url: row.image_url, alt: row.image_alt ?? "" }
      : undefined,
    createdAt: row.created_at,
  };
}

export async function GET() {
  try {
    const rows = (await sql`
      SELECT id, slug, title, description, image_url, image_alt, created_at
      FROM posts
      ORDER BY created_at DESC
    `) as DBPost[];

    const posts = rows.map(mapPostRowToBlogPost);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Get posts error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description, slug, imageUrl, imageAlt } = await req.json();

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      typeof slug !== "string" ||
      !title.trim() ||
      !description.trim() ||
      !slug.trim()
    ) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const rows = (await sql`
      INSERT INTO posts (title, description, slug, image_url, image_alt)
      VALUES (${title}, ${description}, ${slug}, ${imageUrl ?? null}, ${
      imageAlt ?? null
    })
      RETURNING id, slug, title, description, image_url, image_alt, created_at
    `) as DBPost[];

    const post = mapPostRowToBlogPost(rows[0]);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Create post error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

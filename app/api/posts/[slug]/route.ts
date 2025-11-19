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

interface RouteParams {
  slug: string;
}

interface RouteContext {
  params: Promise<RouteParams>;
}

export async function GET(_req: NextRequest, context: RouteContext) {
  const { slug } = await context.params;

  try {
    const rows = (await sql`
      SELECT id, slug, title, description, image_url, image_alt, created_at
      FROM posts
      WHERE slug = ${slug}
    `) as DBPost[];

    const post = rows[0];
    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(mapPostRowToBlogPost(post));
  } catch (error) {
    console.error("Get post error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, context: RouteContext) {
  const { slug } = await context.params;

  try {
    const { title, description, imageUrl, imageAlt } = await req.json();

    if (
      typeof title !== "string" ||
      typeof description !== "string" ||
      !title.trim() ||
      !description.trim()
    ) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const rows = (await sql`
      UPDATE posts
      SET title = ${title},
          description = ${description},
          image_url = ${imageUrl ?? null},
          image_alt = ${imageAlt ?? null}
      WHERE slug = ${slug}
      RETURNING id, slug, title, description, image_url, image_alt, created_at
    `) as DBPost[];

    const post = rows[0];
    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(mapPostRowToBlogPost(post));
  } catch (error) {
    console.error("Update post error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  const { slug } = await context.params;

  try {
    await sql`DELETE FROM posts WHERE slug = ${slug}`;
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    console.error("Delete post error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

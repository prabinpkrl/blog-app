import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import sql from "@/lib/db";

export async function GET() {
  try {
    const userId = cookies().get("userId")?.value;
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const users = await sql`
      SELECT id, name, email
      FROM users
      WHERE id = ${Number(userId)}
    `;

    const user = users[0];
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Me error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

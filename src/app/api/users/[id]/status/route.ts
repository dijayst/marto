
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

// PUT /api/users/[id]/status
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ await it here
    const { status } = await req.json();

    if (!status) {
      return NextResponse.json({ error: "Status is required" }, { status: 400 });
    }

    const user = await User.findByIdAndUpdate(id, { status }, { new: true });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Status updated", user }, { status: 200 });
  } catch (error: any) {
    console.error("Error updating status:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

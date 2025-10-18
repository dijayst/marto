import type { NextApiRequest, NextApiResponse } from "next";
import {connectDB} from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { email } = req.query;

  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    await connectDB();
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ user });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

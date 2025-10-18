// pages/api/users/[email].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  const { email } = req.query;
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  if (!email || typeof email !== "string") return res.status(400).json({ error: "Email required" });

  try {
    const user = await User.findOne({ email }).select("-password -__v"); 
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ user });
    
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

// pages/api/track/add.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();

    const { email, trackingId } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { $push: { trackingId } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Tracking number added", user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

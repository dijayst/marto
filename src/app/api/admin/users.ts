
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "GET") {
    const users = await User.find({}, "email role trackingId createdAt");
    return res.status(200).json({ users });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
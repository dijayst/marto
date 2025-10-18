
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  const { id } = req.query;

  if (!id || (Array.isArray(id) && id.length === 0)) {
    return res.status(400).json({ message: "Missing id parameter" });
  }

  // force it into a string (even if it's an array, take the first value)
  const identifier = Array.isArray(id) ? id[0] : id;

  try {
    if (req.method === "GET") {
      const user = await User.findOne({ email: identifier });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ status: user.status });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}




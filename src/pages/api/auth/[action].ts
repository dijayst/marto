// pages/api/auth/[action].ts
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;
  await connectDB();

  if (req.method === "POST") {
    const { email, password } = req.body;

    if (action === "signup") {
      try {
        const user = new User({ email, password });
        await user.save();
        return res.status(201).json({ message: "Signup successful", user });
      } catch (err: any) {
        return res.status(400).json({ error: err.message });
      }
    }

    if (action === "login") {
      const user = await User.findOne({ email, password });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });
      return res.status(200).json({ message: "Login successful", user });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}

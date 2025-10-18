//pages/api/user/update-parcel.ts
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse){
  if (req.method !== "POST") return res.status(405).end();

  try {
    await connectDB();
    const { email, parcel } = req.body;

    if (!email || !parcel)
      return res.status(400).json({ error: "Missing data" });

    const user = await User.findOneAndUpdate(
      { email },
      { $push: { parcels: parcel } },
      { new: true }
    );

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({ message: "Parcel added successfully", user });
    console.log("Received parcel:", parcel);
  } catch (err) {
    res.status(500).json({ message:"parcel isnt added" });
  }
}
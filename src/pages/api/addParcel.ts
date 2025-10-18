// pages/api/addParcel.ts
import type { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import { getSession } from "next-auth/react"; 
import { connectDB } from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    await connectDB();

    // Get logged-in user (replace with your auth logic)
    const session = await getSession({ req });
    if (!session) return res.status(401).json({ message: "Not authenticated" });

    //const userEmail = session.user.email;
    const userEmail = session?.user?.email;

    const parcelData = req.body;

    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { $push: { parcels: parcelData } },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ message: "Parcel added successfully", parcels: user.parcels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

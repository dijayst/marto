/*import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { v4 as uuidv4 } from "uuid";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "POST") {
      try {
  
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === "admin@site.com" ? "admin" : "user";
  const trackingId = "TRK-" + uuidv4().slice(0, 8).toUpperCase();

    const newUser = await User.create({ email, password: hashedPassword, role,trackingId, });
     const cookie = serialize("userSession", JSON.stringify({
      email: newUser.email,
      role: newUser.role,
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    res.setHeader("Set-Cookie", cookie);

   

    return res.status(201).json({ message: "Signup successful", user: { email: newUser.email, role: newUser.role, trackingId: newUser.trackingId,
        createdAt: newUser.createdAt, } });

         } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
  }




  if (req.method === "GET") {
    return res.status(200).json({ message: "Signup endpoint is working. Please send a POST request." });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
*/
import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();

    if (req.method === "POST") {
      const { email, password } = req.body || {};

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const role = email === "admin@site.com" ? "admin" : "user";
      const trackingId = "TRK-" + uuidv4().slice(0, 8).toUpperCase();

      const newUser = await User.create({
        email,
        password: hashedPassword,
        role,
        trackingId,
      });

      const cookie = serialize(
        "userSession",
        JSON.stringify({ email: newUser.email, role: newUser.role }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
          path: "/",
        }
      );

      res.setHeader("Set-Cookie", cookie);

      return res.status(201).json({
        message: "Signup successful",
        user: {
          email: newUser.email,
          role: newUser.role,
          trackingId: newUser.trackingId,
          createdAt: newUser.createdAt,
        },
      });
    }

    if (req.method === "GET") {
      return res
        .status(200)
        .json({ message: "Signup endpoint is working. Please send a POST request." });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error: any) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}



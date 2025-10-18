import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const trackingId = "TRK-" + uuidv4().slice(0, 8).toUpperCase();
    return res.status(200).json({ trackingId });
  }

  return res.status(405).json({ message: "Method not allowed" });
}

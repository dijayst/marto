



import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/yinkashipping";

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}







//mongodb+srv://olubiyisther_db_user:0czCPpNNq6Y0GhOL@yinka.mudaqxa.mongodb.net/
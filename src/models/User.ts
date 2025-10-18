
import { number } from "framer-motion";
import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";


export interface ParcelInfo {
 
 
weight: number;
  length: number;
  width: number;
  height: number;
  Sendernumber:string;
  Quantity:number;
  Receivernumber:string;
  Receivername:string;
  Receiveraddress:string;
  Sendername:string;
  Senderaddress:string;
  Content:string;
  Deliverydate: string;

}

export interface IUser extends Document {
  email: string;
  password: string;
  trackingId: string;
  role: string;
  status?: string;
  parcels?: ParcelInfo[];
}

const ParcelSchema = new Schema<ParcelInfo>({
  
  weight: Number,
  length: Number,
  width: Number,
  height: Number,
  Quantity:Number,
  Deliverydate:String,
  Content:String,
  Sendernumber:String,
  Receivernumber:String,
  Receivername:String,
  Receiveraddress:String,
  Sendername:String,
  Senderaddress:String,

});

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    trackingId: { type: String, unique: true, required: true, default: uuidv4 },
    role: { type: String, default: "user" },
    status: { type: String, default: "None" },
    parcels: { type: [ParcelSchema], default: [] },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

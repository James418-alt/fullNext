import { Schema, model, models } from "mongoose";
import { iUser } from "../interface";
interface iUserData extends iUser, Document {}
const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const myUserModel = models.admins || model<iUserData>("admins", userModel);
export default myUserModel;

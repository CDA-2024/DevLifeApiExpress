import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    isTutorialFinished: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const UserModel = model("User", UserSchema);

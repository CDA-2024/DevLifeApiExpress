import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: {
      type: String,
      required: [true, "User name required"],
      min: 3,
      max: 100,
    },
    email: {
      type: String,
      required: [true, "User email required"],
      unique: true,
      min: 6,
      max: 100,
      validate: {
        validator: function (v: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
      },
    },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    is_tutorial_finished: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now },
    is_deleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true, name: "user" }
);

export const UserModel = model("User", UserSchema);

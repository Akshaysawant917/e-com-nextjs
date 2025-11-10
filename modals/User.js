import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { customAlphabet } from 'nanoid';

// Create a 6-character alphanumeric ID generator
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: () => nanoid(),
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
    collection: "users"
  }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

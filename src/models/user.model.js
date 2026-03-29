import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    activityData: { type: Array, default: [] }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
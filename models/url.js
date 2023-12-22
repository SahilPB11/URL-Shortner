import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);

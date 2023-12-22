import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: String,
    shortUrl: String,
    createdAt: Date,
    visitHistory: [{ timestamps: { type: Number } }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);

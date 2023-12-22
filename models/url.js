import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    orignalUrl: {
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
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlSchema);
export default Url;

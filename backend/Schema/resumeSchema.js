import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true }
}, { timestamps: true });

const resume = mongoose.model("Resume", resumeSchema);

export default resume
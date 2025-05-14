import mongoose from "mongoose";

const appliedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  resumeLink: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const appliedModel = mongoose.model("applied", appliedSchema);

export default appliedModel;

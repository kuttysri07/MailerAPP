
import resume from "../Schema/resumeSchema.js";

// Create
export const createResume = async (req, res) => {
  try {
    const newResume =await resume.create(req.body);
    res.status(201).json(newResume);    
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
export const getAllResumes = async (req, res) => {
  try {
    const resumes = await resume.find();
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
export const getResumeById = async (req, res) => {
  try {
    const resume = await resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Not found" });
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updateResume = async (req, res) => {
  try {
    const updated = await resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
export const deleteResume = async (req, res) => {
  try {
    const deleted = await resume.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

import express from "express"
import { createResume, deleteResume, getAllResumes, getResumeById, updateResume } from "../Controller/resumeController.js"
const router = express.Router();


router.post("/add", createResume);
router.get("/getall", getAllResumes);
router.get("/:id", getResumeById);
router.put("/:id", updateResume);
router.delete("/:id", deleteResume);

export default router

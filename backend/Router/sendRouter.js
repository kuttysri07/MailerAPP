import express from "express";
import { allApplication, sendMail } from "../Controller/sendMailController.js";

const router = express.Router();

router.post("/send", sendMail);
router.get("/all", allApplication);

export default router;

import appliedModel from "../Schema/index.js";
import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  const data = req.body;

  try {
    if (data.resumeLink) {
      await appliedModel.create(data);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.mail,
        pass: process.env.password,
      },
    });

    const mailOptions = {
      from: process.env.mail,
      to: data.companyEmail,
      subject: `Application for ${data.position} at ${data.companyName}`,
      html: `
       <p>Dear Hiring Team at <strong>${data.companyName}</strong>,</p>

      <p>I hope you're doing well.</p>

      <p>I'm <strong>${data.name}</strong>, and I'm reaching out to express my interest in the <strong>${data.position}</strong> role at your esteemed company. I believe my background and enthusiasm make me a strong fit for this opportunity.</p>

      <p>I've attached my resume for your review: 
      <a href="${data.resumeLink}" target="_blank" style="color: #0077b6; text-decoration: underline;">View My Resume</a></p>

      <p>I’d welcome the chance to contribute to your team and would love to discuss how I can support your goals at <strong>${data.companyName}</strong>.</p>

      <p>Thank you for your time and consideration.</p>

      <p>Best regards,<br/>
      <strong>${data.name}</strong><br/>
      📞 9080130960
      </p>

      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export const allApplication = async (req, res) => {
  try {
    const fetchAllapplies = await appliedModel.find();
    return res
      .status(200)
      .json({ message: "All Application Successfully", fetchAllapplies });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error in fetch all application controller" });
  }
};

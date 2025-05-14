import express from "express";
import cors from "cors";
import mailRouter from "./Router/sendRouter.js";
import resumeRouter from "./Router/resumeRouter.js"
import databaseConnection from "./Database/db.js";

const app = express();
const Port = 5000;

app.use(express.json());
app.use(cors());

databaseConnection();

app.use("/api", mailRouter);

app.use("/api", resumeRouter);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = () => {
  mongoose
    .connect(process.env.mongo_Url)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.error("Database Connection Error:", err);
    });
};

export default databaseConnection;

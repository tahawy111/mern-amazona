import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import allRoutes from "./routes/index.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

allRoutes(app);

// mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log("Failed to connect to MongoD", error);
  });

// server
app.listen(port, () => console.log(`serve at http://localhost:${port}`));

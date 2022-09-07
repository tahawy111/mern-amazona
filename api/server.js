import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import allRoutes from "./routes/index.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

allRoutes(app);

app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

// server
app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`serve at http://localhost:${port}`);
    })
    .catch((error) => {
      console.log("Failed to connect to MongoD", error);
    });
});

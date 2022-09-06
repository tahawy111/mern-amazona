import express from "express";
import data from "./data.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.status(200).send(data.products);
});

app.listen(port, () => console.log(`serve at http://localhost:${port}`));

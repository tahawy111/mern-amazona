import express from "express";
import Product from "../models/Product.js";
import User from "../models/User.js";
import data from "./../data.js";
const router = express.Router();

router.get("/keys/paypal", (req, res) => {
  return res.status(200).json(process.env.PAYPAL_CLIENT_ID || "sb");
});

router.get("/", async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.status(200).json({ createdProducts, createdUsers });
});

export default router;

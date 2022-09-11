import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

export const getCategories = async (req, res) => {
  const categories = await Product.find().distinct("category");
  res.status(200).json({ categories });
};

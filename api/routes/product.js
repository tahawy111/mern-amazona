import express from "express";
import {
  getProducts,
  getCategories,
} from "./../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/categories", getCategories);

export default router;

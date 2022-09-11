import express from "express";
import { isAuth } from "../utils.js";
import {
  create,
  getById,
  pay,
  getUserOrders,
} from "./../controllers/order.controller.js";
const router = express.Router();

router.post("/", isAuth, create);
router.get("/mine", isAuth, getUserOrders);
router.get("/:id", isAuth, getById);
router.put("/:id/pay", isAuth, pay);

export default router;

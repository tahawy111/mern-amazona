import express from "express";
import { isAuth } from "../utils.js";
import { create } from "./../controllers/order.controller.js";
const router = express.Router();

router.post("/", isAuth, create);

export default router;

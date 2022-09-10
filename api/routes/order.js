import express from "express";
import { isAuth } from "../utils.js";
import { create, getById } from "./../controllers/order.controller.js";
const router = express.Router();

router.post("/", isAuth, create);
router.get("/:id", isAuth, getById);

export default router;

import express from "express";
import { isAuth } from "../utils.js";
import { signin, signup, profile } from "./../controllers/user.controller.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.put("/profile", isAuth, profile);

export default router;

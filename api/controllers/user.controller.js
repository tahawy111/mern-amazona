import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

export const signin = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).json({ error: "User not found" });

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(403).json({ error: "Wrong password" });
  }

  return res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user),
  });
};

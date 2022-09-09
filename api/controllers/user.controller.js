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

export const signup = async (req, res) => {
  if (await User.findOne({ email: req.body.email }))
    return res.status(401).json({ error: "User is already exists" });

  if (req.body.password.length < 6) {
    return res
      .status(401)
      .json({ error: "Password must be at least 6 characters" });
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });

  try {
    const user = await newUser.save();
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

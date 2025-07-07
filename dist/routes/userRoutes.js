import express from "express";
import userModel from "../models/userModel.js";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass, role } = req.body;
  const result = await userModel.insertOne({
    name: name,
    email: email,
    pass: pass,
    role: role || "user"
  });
  return res.json(result);
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  // First, check if the email exists
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.json({ message: "email_not_found" });
  }
  // Now check password
  if (user.pass === pass) {
    return res.json(user);
  } else {
    return res.json({ message: "incorrect_password" });
  }
});



export default userRouter;
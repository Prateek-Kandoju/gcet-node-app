import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}

// Vercel will call this handler for every request
export default async function handler(req, res) {
  await connectToDatabase();
  return app(req, res);
}
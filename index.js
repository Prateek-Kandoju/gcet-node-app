import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/ProductRoutes.js";
//import orderRouter from "./routes/orderRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;

app.use("/users", userRouter);

app.use("/products", productRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });
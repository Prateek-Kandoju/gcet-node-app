
import express from "express";
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/new", async (req, res) => {
  const { email, orderValue, items } = req.body;
  const result = await orderModel.create({ email, orderValue, items });
  return res.json(result);
});

orderRouter.get("/:id", async (req, res) => {
  const email = req.params.id;
  const result = await orderModel.find({ email });
  return res.json(result);
});

orderRouter.get("/all", async (req, res) => {
  const result = await orderModel.find();
  return res.json(result);
});

// Cancel (delete) an order by ID
orderRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await orderModel.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ message: "Order not found" });
    return res.json({ message: "Order cancelled", id });
  } catch (err) {
    return res.status(500).json({ message: "Error cancelling order", error: err.message });
  }
});

export default orderRouter;
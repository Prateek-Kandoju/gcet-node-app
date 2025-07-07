
import mongoose from 'mongoose'
const orderSchema = mongoose.Schema({
  email: { type: String },
  orderValue: { type: Number },
  orderDate: { type: Date, default: Date.now },
  items: [
    {
      pid: String,
      name: String,
      price: Number,
      quantity: Number
    }
  ]
});
// const product = mongoose.model("Product", productSchema);

export default mongoose.model("Order", orderSchema);

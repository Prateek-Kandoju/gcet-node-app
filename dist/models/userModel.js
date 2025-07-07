import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});
// const user = mongoose.model("User", userSchema);

export default mongoose.model("User", userSchema);
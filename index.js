import express from "express";
import cors from "cors";
const app = express();
app.listen(8080, () => {
  mongoose.connect("mongodb")
  console.log("Server Started");
});
app.use(cors());

const userSchema = mongoose.Schema({
  name:{type:String},
})
const user =mongoose.model("User",userSchema);



app.get("/", (req, res) => {
  return res.send("Good Morning");
});

app.get("/greet", (req, res) => {
  res.send("Greetings");
});

app.get("/name", (req, res) => {
  res.send("Kandoju Prateek");
});

app.get("/weather", (req, res) => {
  res.send("69 degrees");
});

app.get("/Products", (req, res) => {
  const products = [
    { name: "Product 1", price: 34 },
    { name: "Product 2", price: 64 },
    { name: "Product 3", price: 45 },
  ];
  res.json(products);
});


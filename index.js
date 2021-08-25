import express from "express";
import dotenv from "dotenv";
import { usersRoutes } from "./src/routes/users.js";
import { productsRoutes } from "./src/routes/products.js";
dotenv.config();

const app = express();

app.use(express.json());

let response = { error: false, code: 200 };

app.use(usersRoutes);
app.use(productsRoutes);

app.get("/ordersFindAll", async (req, res) => {
  response.response = await ordersFindAll();
  res.send(response);
});
app.get("/orderFindOne", async (req, res) => {
  let find = await orderFindOne(req.body.id);
  find == ""
    ? (response = { error: true, code: 400, response: "order not found" })
    : (response.response = find);
  res.send(response);
});
app.get("/orderFindOne/:orderId", async (req, res) => {
  let find = await orderFindOne(req.params.orderId);
  find == ""
    ? (response = { error: true, code: 400, response: "order not found" })
    : (response.response = find);
  res.send(response);
});
app.post("/orderPost", async (req, res) => {
  ordersPost(req.body);
  response.response = "posted order";
  res.send(response);
});
app.delete("/orderDelete", async (req, res) => {
  let find = await orderFindOne(req.body.id);
  find == ""
    ? (response = { error: true, code: 400, response: "order not found" })
    : (orderDelete(req.body.id),
      (response.response = `deleted order ${req.body.id}`));
  res.send(response);
});
app.delete("/orderDelete/:orderId", async (req, res) => {
  let find = await orderFindOne(req.params.orderId);
  find == ""
    ? (response = { error: true, code: 400, response: "order not found" })
    : (orderDelete(req.params.orderId),
      (response.response = `deleted order ${req.params.orderId}`));
  res.send(response);
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));

export { response };

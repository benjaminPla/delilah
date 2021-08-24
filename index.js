import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
import {
  usersFindAll,
  userFindOne,
  userPost,
  userDelete,
  userPut,
} from "./server/user.js";
import {
  productsFindAll,
  productFindOne,
  productPost,
  productDelete,
  productPut,
} from "./server/products.js";
import { ordersFindAll } from "./server/orders.js";

const app = express();

app.use(express.json());

let response = { error: false, code: 200 };

app.get("/usersFindAll", async (req, res) => {
  response.response = await usersFindAll();
  res.send(response);
});
app.get("/userFindOne", async (req, res) => {
  const userNameOrEmail = req.body.user_name || req.body.email;
  let find = await userFindOne(userNameOrEmail);
  find == ""
    ? (response.response = "user not found")
    : (response.response = find);
  res.send(response);
});
app.get("/userFindOne/:userNameOrEmail", async (req, res) => {
  let find = await userFindOne(req.params.userNameOrEmail);
  find == ""
    ? (response.response = "user not found")
    : (response.response = find);
  res.send(response);
});
app.post("/userPost", async (req, res) => {
  const userNameOrEmail = req.body.user_name || req.body.email;
  let find = await userFindOne(userNameOrEmail);
  find == ""
    ? (userPost(req.body),
      (response.response = `posted user: ${userNameOrEmail}`))
    : (response = { error: true, code: 400, response: "user already exist" });
  res.send(response);
});
app.delete("/userDelete", async (req, res) => {
  const userNameOrEmail = req.body.user_name || req.body.email;
  let find = await userFindOne(userNameOrEmail);
  find == ""
    ? (response = { error: true, code: 400, response: "user not found" })
    : ((response.response = `deleted user: ${find[0].user_name}`),
      userDelete(find));
  res.send(response);
});
app.delete("/userDelete/:userNameOrEmail", async (req, res) => {
  let find = await userFindOne(req.params.userNameOrEmail);
  find == ""
    ? (response = { error: true, code: 400, response: "user not found" })
    : ((response.response = `deleted user ${find[0].user_name}`),
      userDelete(find));
  res.send(response);
});
app.put("/userPut", async (req, res) => {
  const userNameOrEmail = req.body.user_name || req.body.email;
  let find = await userFindOne(userNameOrEmail);
  find == ""
    ? (response = { error: true, code: 400, response: "user not found" })
    : (userPut(req.body),
      (response.response = `updated user ${find[0].user_name}`));
  res.send(response);
});
app.get("/login", async (req, res) => {
  const userNameOrEmail = req.body.user_name || req.body.email;
  let find = await userFindOne(userNameOrEmail);
  if (!userNameOrEmail) {
    response = {
      erro: true,
      code: 400,
      response: "missing 'user_name' or 'emial' field",
    };
  } else if (find == "") {
    response = { erro: true, code: 400, response: "user not found" };
  } else if (!req.body.password) {
    response = {
      erro: true,
      code: 400,
      response: "missing 'password' field",
    };
  } else {
    const password = jwt.sign(process.env.SECURITY_TOKEN, req.body.password);
    if (find[0].password !== password) {
      response = { error: true, code: 400, response: "incorrect password" };
    } else {
      response.response = `welcome ${find[0].user_name}`;
    }
  }
  res.send(response);
});

app.get("/productsFindAll", async (req, res) => {
  response.response = await productsFindAll();
  res.send(response);
});
app.get("/productFindOne", async (req, res) => {
  const productName = req.body.product_name;
  let find = await productFindOne(productName);
  find == ""
    ? (response.response = "product not found")
    : (response.response = find);
  res.send(response);
});
app.get("/productFindOne/:productName", async (req, res) => {
  let find = await productFindOne(req.params.productName);
  find == ""
    ? (response.response = "product not found")
    : (response.response = find);
  res.send(response);
});
app.post("/productPost", async (req, res) => {
  const productName = req.body.product_name;
  let find = await productFindOne(productName);
  find == ""
    ? (productPost(req.body),
      (response.response = `posted product: ${productName}`))
    : (response = {
        error: true,
        code: 400,
        response: "product already exist",
      });
  res.send(response);
});
app.delete("/productDelete", async (req, res) => {
  const productName = req.body.product_name;
  let find = await productFindOne(productName);
  find == ""
    ? (response = {
        error: true,
        code: 400,
        response: "product not found",
      })
    : (productDelete(find),
      (response.response = `deleted product ${productName}`));
  res.send(response);
});
app.delete("/productDelete/:productName", async (req, res) => {
  let find = await productFindOne(req.params.productName);
  find == ""
    ? (response = { error: true, code: 400, response: "product not found" })
    : ((response.response = `deleted product ${find[0].product_name}`),
      productDelete(find));
  res.send(response);
});
app.put("/productPut", async (req, res) => {
  const productName = req.body.product_name;
  let find = await productFindOne(productName);
  find == ""
    ? (response = { error: true, code: 400, response: "product not found" })
    : (productPut(req.body),
      (response.response = `updated product ${find[0].product_name}`));
  res.send(response);
});

app.get("/ordersFindAll", async (req, res) => {
  let find = await ordersFindAll();
  res.send(find[0]);
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));

export { response };

import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { usersFindAll, userFindOne } from "./server.js";

const app = express();

app.use(express.json());

let response = { error: false, code: 200 };

app.get("/usersFindAll", async (req, res) => {
  let find = await usersFindAll();
  response.response = find;
  res.send(response);
});
app.get("/userFindOne/:userNameOrEmail", async (req, res) => {
  let find = await userFindOne(req.params.userNameOrEmail);
  find == ""
    ? (response.response = "user not found")
    : (response.response = find);
  res.send(response);
});
app.get("/user/FindOne", async (req, res) => {
  const userNameOrEmail = req.body.user_name || req.body.email;
  let find = await userFindOne(userNameOrEmail);
  find == ""
    ? (response.response = "user not found")
    : (response.response = find);
  res.send(response);
});

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));

export { response };

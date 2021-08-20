import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { usersFindAll, userFindOne, userPost, userDelete } from "./server.js";

const app = express();

app.use(express.json());

let response = { error: false, code: 200 };

app.get("/usersFindAll", async (req, res) => {
  let find = await usersFindAll();
  response.response = find;
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

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));

export { response };

import { sequelize } from "../../server/server.js";
import { usersServer } from "../../server/user.js";

const usersControllers = {
  findAll: async (req, res) => {
    res.send(await usersServer.findAll());
  },
  findOne: async (req, res) => {
    const userNameOrEmail =
      req.body.user_name || req.body.email || req.params.userNameOrEmail;
    let find = await usersServer.findOne(userNameOrEmail);
    find == "" ? res.send("user not found") : res.send(find);
  },
  login: async (req, res) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    let find = await usersServer.findOne(userNameOrEmail);
    if (!userNameOrEmail) {
      res.send("missing 'user_name' or 'emial' field");
    } else if (find == "") {
      res.send("user not found");
    } else if (!req.body.password) {
      res.send("missing 'password' field");
    } else {
      if (find[0].password !== req.body.password) {
        res.send("incorrect password");
      } else {
        res.send(`welcome ${find[0].user_name}`);
      }
    }
  },
  post: async (req, res) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    console.log(userNameOrEmail);
    let find = await usersServer.findOne(userNameOrEmail);
    find == ""
      ? (usersServer.post(req.body),
        res.send(`posted user: ${userNameOrEmail}`))
      : res.send("user already exist");
  },
  delete: async (req, res) => {
    const userNameOrEmail =
      req.body.user_name || req.body.email || req.params.userNameOrEmail;
    let find = await usersServer.findOne(userNameOrEmail);
    find == ""
      ? res.send("user not found")
      : (res.send(`deleted user: ${find[0].user_name}`),
        usersServer.delete(find));
  },
  put: async (req, res) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    let find = await usersServer.findOne(userNameOrEmail);
    find == ""
      ? res.send("user not found")
      : (usersServer.put(req.body),
        res.send(`updated user ${find[0].user_name}`));
  },
};

export { usersControllers };

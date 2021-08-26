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
    res.send(find);
  },
  login: async (req, res) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    let find = await usersServer.findOne(userNameOrEmail);
    res.send(`welcome ${find[0].user_name}`);
  },
  post: (req, res) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    usersServer.post(req.body);
    res.send(`posted user: ${userNameOrEmail}`);
  },
  delete: (req, res) => {
    const userNameOrEmail =
      req.body.user_name || req.body.email || req.params.userNameOrEmail;
    usersServer.delete(userNameOrEmail);
    res.send(`deleted user: ${userNameOrEmail}`);
  },
  put: (req, res) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    usersServer.put(req.body);
    res.send(`updated user ${userNameOrEmail}`);
  },
};

export { usersControllers };

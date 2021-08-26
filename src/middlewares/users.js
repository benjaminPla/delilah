import { sequelize } from "../../server/server.js";
import { usersServer } from "../../server/user.js";

const usersMiddlewares = {
  userNotFound: async (req, res, next) => {
    const userNameOrEmail =
      req.body.user_name || req.body.email || req.params.userNameOrEmail;
    let find = await usersServer.findOne(userNameOrEmail);
    find == "" ? res.send("user not found") : next();
  },
  userAlreadyExists: async (req, res, next) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    let find = await usersServer.findOne(userNameOrEmail);
    find == "" ? next() : res.send("user already exist");
  },
  missingUserNameOrEmail: (req, res, next) => {
    const userNameOrEmail =
      req.body.user_name || req.body.email || req.params.userNameOrEmail;
    !userNameOrEmail
      ? res.send("missing 'user_name' or 'emial' field")
      : next();
  },
  missingUserName: (req, res, next) => {
    !req.body.user_name ? res.send("missing 'user_name' field") : next();
  },
  missingFullName: (req, res, next) => {
    !req.body.full_name ? res.send("missing 'full_name' field") : next();
  },
  missingEmail: (req, res, next) => {
    !req.body.email ? res.send("missing 'email' field") : next();
  },
  missingPhoneNumber: (req, res, next) => {
    !req.body.phone_number ? res.send("missing 'phone_number' field") : next();
  },
  missingShippingAddress: (req, res, next) => {
    !req.body.shipping_address
      ? res.send("missing 'shipping_address' field")
      : next();
  },
  missingPassword: (req, res, next) => {
    !req.body.password ? res.send("missing 'password' field") : next();
  },
  incorrectPassword: async (req, res, next) => {
    const userNameOrEmail = req.body.user_name || req.body.email;
    let find = await usersServer.findOne(userNameOrEmail);
    find[0].password !== req.body.password
      ? res.send("incorrect password")
      : next();
  },
};

export { usersMiddlewares };

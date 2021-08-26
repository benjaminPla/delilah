import express from "express";
import { usersMiddlewares } from "../middlewares/users.js";
import { usersControllers } from "../controllers/users.js";
const usersRoutes = express.Router();

usersRoutes.get("/usersFindAll", usersControllers.findAll);
usersRoutes.get(
  "/usersFindOne",
  usersMiddlewares.missingUserNameOrEmail,
  usersMiddlewares.userNotFound,
  usersControllers.findOne
);
usersRoutes.get(
  "/usersFindOne/:userNameOrEmail",
  usersMiddlewares.missingUserNameOrEmail,
  usersMiddlewares.userNotFound,
  usersControllers.findOne
);
usersRoutes.get(
  "/usersLogin",
  usersMiddlewares.missingUserNameOrEmail,
  usersMiddlewares.missingPassword,
  usersMiddlewares.incorrectPassword,
  usersMiddlewares.userNotFound,
  usersControllers.login
);
usersRoutes.post(
  "/usersPost",
  usersMiddlewares.userAlreadyExists,
  usersMiddlewares.missingUserName,
  usersMiddlewares.missingFullName,
  usersMiddlewares.missingEmail,
  usersMiddlewares.missingPhoneNumber,
  usersMiddlewares.missingShippingAddress,
  usersMiddlewares.missingPassword,
  usersControllers.post
);
usersRoutes.delete(
  "/usersDelete",
  usersMiddlewares.missingUserNameOrEmail,
  usersMiddlewares.userNotFound,
  usersControllers.delete
);
usersRoutes.delete(
  "/usersDelete/:userNameOrEmail",
  usersMiddlewares.missingUserNameOrEmail,
  usersMiddlewares.userNotFound,
  usersControllers.delete
);
usersRoutes.put(
  "/usersPut",
  usersMiddlewares.userNotFound,
  usersMiddlewares.missingUserName,
  usersMiddlewares.missingFullName,
  usersMiddlewares.missingEmail,
  usersMiddlewares.missingPhoneNumber,
  usersMiddlewares.missingShippingAddress,
  usersMiddlewares.missingPassword,
  usersControllers.put
);

export { usersRoutes };

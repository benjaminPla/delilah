import express from "express";
import { usersControllers } from "../controllers/users.js";
const usersRoutes = express.Router();

usersRoutes.get("/usersFindAll", usersControllers.findAll);
usersRoutes.get("/usersFindOne", usersControllers.findOne);
usersRoutes.get("/usersFindOne/:userNameOrEmail", usersControllers.findOne);
usersRoutes.get("/usersLogin", usersControllers.login);
usersRoutes.post("/usersPost", usersControllers.post);
usersRoutes.delete("/usersDelete", usersControllers.delete);
usersRoutes.delete("/usersDelete/:userNameOrEmail", usersControllers.delete);
usersRoutes.put("/usersPut", usersControllers.put);

export { usersRoutes };

import express from "express";
import { ordersControllers } from "../controllers/orders.js";
const ordersRoutes = express.Router();

ordersRoutes.get("/ordersFindAll", ordersControllers.findAll);

export { ordersRoutes };

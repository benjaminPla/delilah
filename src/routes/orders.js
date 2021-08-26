import express from "express";
import { ordersControllers } from "../controllers/orders.js";
const ordersRoutes = express.Router();

ordersRoutes.get("/ordersFindAll", ordersControllers.findAll);
ordersRoutes.get("/ordersFindOne", ordersControllers.findOne);
ordersRoutes.get("/ordersFindOne/:orderId", ordersControllers.findOne);
ordersRoutes.post("/ordersPost", ordersControllers.post);
ordersRoutes.delete("/ordersDelete", ordersControllers.delete);
ordersRoutes.delete("/ordersDelete/:orderId", ordersControllers.delete);
ordersRoutes.put("/ordersPut", ordersControllers.put);

export { ordersRoutes };

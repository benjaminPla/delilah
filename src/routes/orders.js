import express from "express";
import { ordersMiddlewares } from "../middlewares/orders.js";
import { ordersControllers } from "../controllers/orders.js";
const ordersRoutes = express.Router();

ordersRoutes.get("/ordersFindAll", ordersControllers.findAll);
ordersRoutes.get(
  "/ordersFindOne",
  ordersMiddlewares.missingId,
  ordersMiddlewares.orderNotFound,
  ordersControllers.findOne
);
ordersRoutes.get(
  "/ordersFindOne/:orderId",
  ordersMiddlewares.missingId,
  ordersMiddlewares.orderNotFound,
  ordersControllers.findOne
);
ordersRoutes.post(
  "/ordersPost",
  ordersMiddlewares.missingUserId,
  ordersMiddlewares.missingProductId,
  ordersControllers.post
);
ordersRoutes.delete(
  "/ordersDelete",
  ordersMiddlewares.missingId,
  ordersMiddlewares.orderNotFound,
  ordersControllers.delete
);
ordersRoutes.delete(
  "/ordersDelete/:orderId",
  ordersMiddlewares.missingId,
  ordersMiddlewares.orderNotFound,
  ordersControllers.delete
);
ordersRoutes.put(
  "/ordersPut",
  ordersMiddlewares.missingId,
  ordersMiddlewares.missingUserId,
  ordersMiddlewares.missingProductId,
  ordersControllers.put
);

export { ordersRoutes };

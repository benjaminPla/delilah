import express from "express";
import { productsMiddlewares } from "../middlewares/products.js";
import { productsControllers } from "../controllers/products.js";
const productsRoutes = express.Router();

productsRoutes.get("/productsFindAll", productsControllers.findAll);
productsRoutes.get(
  "/productsFindOne",
  productsMiddlewares.missingProductName,
  productsMiddlewares.productNotFound,
  productsControllers.findOne
);
productsRoutes.get(
  "/productsFindOne/:productName",
  productsMiddlewares.missingProductName,
  productsMiddlewares.productNotFound,
  productsControllers.findOne
);
productsRoutes.post(
  "/productsPost",
  productsMiddlewares.missingProductName,
  productsMiddlewares.missingPrice,
  productsMiddlewares.productAlreadyExists,
  productsControllers.post
);
productsRoutes.delete(
  "/productsDelete",
  productsMiddlewares.missingProductName,
  productsMiddlewares.productNotFound,
  productsControllers.delete
);
productsRoutes.delete(
  "/productsDelete/:productName",
  productsMiddlewares.missingProductName,
  productsMiddlewares.productNotFound,
  productsControllers.delete
);
productsRoutes.put(
  "/productsPut",
  productsMiddlewares.missingProductName,
  productsMiddlewares.missingPrice,
  productsMiddlewares.productNotFound,
  productsControllers.put
);

export { productsRoutes };

import express from "express";
import { productsControllers } from "../controllers/products.js";
const productsRoutes = express.Router();

productsRoutes.get("/productsFindAll", productsControllers.findAll);
productsRoutes.get("/productsFindOne", productsControllers.findOne);
productsRoutes.get(
  "/productsFindOne/:productName",
  productsControllers.findOne
);
productsRoutes.post("/productsPost", productsControllers.post);
productsRoutes.delete("/productsDelete", productsControllers.delete);
productsRoutes.delete(
  "/productsDelete/:productName",
  productsControllers.delete
  );
  productsRoutes.put("/productsPut", productsControllers.put);

export { productsRoutes };

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

export { productsRoutes };

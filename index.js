import express from "express";
import dotenv from "dotenv";
import { usersRoutes } from "./src/routes/users.js";
import { productsRoutes } from "./src/routes/products.js";
import { ordersRoutes } from "./src/routes/orders.js";
dotenv.config();

const app = express();

app.use(express.json());

let response = { error: false, code: 200 };

app.use(usersRoutes);
app.use(productsRoutes);
app.use(ordersRoutes);

const PORT = process.env.PORT || "3001";
app.listen(PORT, console.log(`srv on port: ${PORT}`));

export { response };
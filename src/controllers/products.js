import { sequelize } from "../../server/server.js";
import { productsServer } from "../../server/products.js";

const productsControllers = {
  findAll: async (req, res) => {
    res.send(await productsServer.findAll());
  },
  findOne: async (req, res) => {
    const productName = req.body.product_name || req.params.productName;
    let find = await productsServer.findOne(productName);
    find == "" ? res.send("product not found") : res.send(find);
  },
  post: async (req, res) => {
    const productName = req.body.product_name;
    let find = await productsServer.findOne(productName);
    find == ""
      ? (productsServer.post(req.body), res.send(`posted product: ${productName}`))
      : res.send("product already exist");
  },
};

export { productsControllers };

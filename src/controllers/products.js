import { sequelize } from "../../server/server.js";
import { productsServer } from "../../server/products.js";

const productsControllers = {
  findAll: async (req, res) => {
    res.send(await productsServer.findAll());
  },
  findOne: async (req, res) => {
    const productName = req.body.product_name || req.params.productName;
    let find = await productsServer.findOne(productName);
    res.send(find);
  },
  post: (req, res) => {
    productsServer.post(req.body);
    res.send(`posted product: ${req.body.product_name}`);
  },
  delete: (req, res) => {
    const productName = req.body.product_name || req.params.productName;
    productsServer.delete(productName);
    res.send(`deleted product ${productName}`);
  },
  put: (req, res) => {
    productsServer.put(req.body);
    res.send(`updated product ${req.body.product_name}`);
  },
};

export { productsControllers };

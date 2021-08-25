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
      ? (productsServer.post(req.body),
        res.send(`posted product: ${productName}`))
      : res.send("product already exist");
  },
  delete: async (req, res) => {
    const productName = req.body.product_name || req.params.productName;
    let find = await productsServer.findOne(productName);
    find == ""
      ? res.send("product not found")
      : (productsServer.delete(find),
        res.send(`deleted product ${productName}`));
  },
  put: async (req, res) => {
    const productName = req.body.product_name;
    let find = await productsServer.findOne(productName);
    find == ""
      ? res.send("product no found")
      : (productsServer.put(req.body),
        res.send(`updated product ${find[0].product_name}`));
  },
};

export { productsControllers };

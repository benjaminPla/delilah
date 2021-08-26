import { productsServer } from "../../server/products.js";

const productsMiddlewares = {
  productNotFound: async (req, res, next) => {
    const productName = req.body.product_name || req.params.productName;
    let find = await productsServer.findOne(productName);
    find == "" ? res.send("product not found") : next();
  },
  productAlreadyExists: async (req, res, next) => {
    const productName = req.body.product_name;
    let find = await productsServer.findOne(productName);
    find == "" ? next() : res.send("product already exist");
  },
  missingProductName: (req, res, next) => {
    const productName = req.body.product_name || req.params.productName;
    !productName ? res.send("missing 'product_name' field") : next();
  },
  missingPrice: (req, res, next) => {
    const price = req.body.price || req.params.price;
    !price ? res.send("missing 'price' field") : next();
  },
};

export { productsMiddlewares };

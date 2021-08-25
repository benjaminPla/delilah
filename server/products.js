import { sequelize } from "./server.js";

async function productsFindAll() {
  return await sequelize.query("SELECT * FROM products WHERE 1", {
    type: "SELECT",
  });
}
async function productFindOne(productName) {
  return await sequelize.query(
    "SELECT * FROM products WHERE product_name = ?",
    { replacements: [productName], type: "SELECT" }
  );
}
async function productPost(product) {
  await sequelize.query(
    "INSERT INTO products (product_name, price) VALUES (?, ?)",
    {
      replacements: [product.product_name, product.price],
      type: "INSERT",
    }
  );
}
async function productDelete(product) {
  await sequelize.query("DELETE FROM products WHERE product_name = ?", {
    replacements: [product[0].product_name],
    type: "DELETE",
  });
}
async function productPut(product) {
  await sequelize.query(
    "UPDATE products SET price = ? WHERE product_name = ?",
    { replacements: [product.price, product.product_name], type: "UPDATE" }
  );
}

export {
  productsFindAll,
  productFindOne,
  productPost,
  productDelete,
  productPut,
};

import { sequelize } from "./server.js";

const productsServer = {
  findAll: async () => {
    return await sequelize.query("SELECT * FROM products WHERE 1;", {
      type: "SELECT",
    });
  },
  findOne: async (data) => {
    return await sequelize.query(
      "SELECT * FROM products WHERE product_name = ?;",
      { replacements: [data], type: "SELECT" }
    );
  },
  post: async (data) => {
    await sequelize.query(
      "INSERT INTO products (product_name, price) VALUES (?, ?);",
      {
        replacements: [data.product_name, data.price],
        type: "INSERT",
      }
    );
  },
  delete: async (data) => {
    await sequelize.query("DELETE FROM products WHERE product_name = ?;", {
      replacements: [data[0].product_name],
      type: "DELETE",
    });
  },
  put: async (data) => {
    await sequelize.query(
      "UPDATE products SET price = ? WHERE product_name = ?;",
      { replacements: [data.price, data.product_name], type: "UPDATE" }
    );
  },
};

export { productsServer };

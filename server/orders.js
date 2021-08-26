import { sequelize } from "./server.js";

const ordersServer = {
  findAll: async () => {
    return await sequelize.query(
      "SELECT orders.id, users.user_name, products.product_name, products.price " +
        "FROM users, products, orders " +
        "WHERE orders.user_id = users.id AND " +
        "orders.product_id = products.id;",
      { type: "SELECT" }
    );
  },
  findOne: async (data) => {
    return await sequelize.query(
      "SELECT orders.id, users.user_name, products.product_name " +
        "FROM users, products, orders " +
        "WHERE orders.user_id = users.id AND " +
        "orders.product_id = products.id AND " +
        "orders.id = ?",
      {
        replacements: [data],
        type: "SELECT",
      }
    );
  },
  post: async (data) => {
    return await sequelize.query(
      "INSERT INTO orders (user_id, product_id) VALUES (?, ?);",
      { replacements: [data.user_id, data.product_id], type: "INSERT" }
    );
  },
  delete: async (data) => {
    return await sequelize.query("DELETE FROM orders WHERE id = ?;", {
      replacements: [data],
      type: "DELETE",
    });
  },
};

const ordersDropTable = "DROP TABLE IF EXISTS orders;";
const ordersCreateTable =
  "CREATE TABLE orders (" +
  "id INT NOT NULL AUTO_INCREMENT," +
  "user_id INT NOT NULL," +
  "product_id INT NOT NULL," +
  "PRIMARY KEY (id)," +
  "FOREIGN KEY (user_id) REFERENCES users (id)," +
  "FOREIGN KEY (product_id) REFERENCES products (id)" +
  ");";

export { ordersServer, ordersDropTable, ordersCreateTable };

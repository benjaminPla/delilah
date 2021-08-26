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
};

async function orderFindOne(orderId) {
  return await sequelize.query("SELECT * FROM orders WHERE id = ?", {
    replacements: [orderId],
    type: "SELECT",
  });
}
async function ordersPost(order) {
  return await sequelize.query(
    "INSERT INTO orders (user_id, product_id) VALUES (?, ?);",
    { replacements: [order.user_id, order.product_id], type: "INSERT" }
  );
}
async function orderDelete(orderId) {
  return await sequelize.query("DELETE FROM orders WHERE id = ?;", {
    replacements: [orderId],
    type: "DELETE",
  });
}
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

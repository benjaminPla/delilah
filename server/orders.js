import { sequelize } from "./server.js";

async function ordersFindAll() {
  return await sequelize.query(
    "SELECT orders.id, users.user_name, products.product_name, products.price " +
      "FROM users, products, orders " +
      "WHERE orders.user_id = users.id AND " +
      "orders.product_id = products.id;",
    { type: "SELECT" }
  );
}
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

export { ordersFindAll, orderFindOne, ordersPost };
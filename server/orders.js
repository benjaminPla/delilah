import { sequelize } from "./server.js";

async function ordersFindAll() {
  return await sequelize.query(
    "SELECT users.user_name, products.product_name, products.price " +
      "FROM users, products, orders " +
      "WHERE orders.user_id = users.id AND " +
      "orders.product_id = products.id;"
  );
}

export { ordersFindAll };

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
  put: async (data) => {
    await sequelize.query(
      "UPDATE orders SET user_id = ?, product_id = ? WHERE orders.id = ?;",
      { replacements: [data.user_id, data.product_id, data.id], type: "UPDATE" }
    );
  },
  dropTable: "DROP TABLE IF EXISTS orders;",
  createTable:
    "CREATE TABLE orders (" +
    "id INT NOT NULL AUTO_INCREMENT," +
    "user_id INT NOT NULL," +
    "product_id INT NOT NULL," +
    "PRIMARY KEY (id)," +
    "FOREIGN KEY (user_id) REFERENCES users (id)," +
    "FOREIGN KEY (product_id) REFERENCES products (id)" +
    ");",
  insertInto:
    "INSERT INTO orders VALUES " +
    "(1, 17, 67)," +
    "(2, 38, 55)," +
    "(3, 35, 70)," +
    "(4, 92, 36)," +
    "(5, 12, 58)," +
    "(6, 98, 74)," +
    "(7, 63, 55)," +
    "(8, 80, 79)," +
    "(9, 45, 85)," +
    "(10, 13, 51)," +
    "(11, 41, 82)," +
    "(12, 7, 62)," +
    "(13, 47, 52)," +
    "(14, 85, 72)," +
    "(15, 87, 89)," +
    "(16, 48, 10)," +
    "(17, 15, 23)," +
    "(18, 54, 86)," +
    "(19, 31, 32)," +
    "(20, 38, 91)," +
    "(21, 7, 100)," +
    "(22, 48, 55)," +
    "(23, 6, 63)," +
    "(24, 57, 81)," +
    "(25, 92, 27)," +
    "(26, 15, 26)," +
    "(27, 71, 51)," +
    "(28, 28, 41)," +
    "(29, 99, 97)," +
    "(30, 13, 98)," +
    "(31, 47, 56)," +
    "(32, 61, 13)," +
    "(33, 85, 17)," +
    "(34, 32, 90)," +
    "(35, 16, 75)," +
    "(36, 53, 75)," +
    "(37, 41, 50)," +
    "(38, 34, 17)," +
    "(39, 91, 45)," +
    "(40, 16, 47)," +
    "(41, 53, 53)," +
    "(42, 63, 84)," +
    "(43, 18, 15)," +
    "(44, 2, 47)," +
    "(45, 98, 99)," +
    "(46, 83, 73)," +
    "(47, 58, 61)," +
    "(48, 54, 97)," +
    "(49, 67, 2)," +
    "(50, 79, 70)," +
    "(51, 60, 21)," +
    "(52, 22, 53)," +
    "(53, 49, 88)," +
    "(54, 96, 35)," +
    "(55, 24, 14)," +
    "(56, 100, 9)," +
    "(57, 98, 64)," +
    "(58, 10, 43)," +
    "(59, 85, 42)," +
    "(60, 73, 77)," +
    "(61, 39, 78)," +
    "(62, 98, 54)," +
    "(63, 95, 52)," +
    "(64, 74, 97)," +
    "(65, 37, 65)," +
    "(66, 95, 88)," +
    "(67, 54, 75)," +
    "(68, 52, 50)," +
    "(69, 56, 12)," +
    "(70, 100, 8)," +
    "(71, 47, 46)," +
    "(72, 22, 97)," +
    "(73, 12, 33)," +
    "(74, 6, 9)," +
    "(75, 12, 3)," +
    "(76, 94, 56)," +
    "(77, 86, 42)," +
    "(78, 83, 44)," +
    "(79, 4, 69)," +
    "(80, 32, 52)," +
    "(81, 43, 91)," +
    "(82, 77, 55)," +
    "(83, 41, 16)," +
    "(84, 13, 36)," +
    "(85, 41, 40)," +
    "(86, 88, 16)," +
    "(87, 18, 11)," +
    "(88, 62, 72)," +
    "(89, 6, 57)," +
    "(90, 13, 95)," +
    "(91, 74, 44)," +
    "(92, 92, 52)," +
    "(93, 45, 66)," +
    "(94, 27, 74)," +
    "(95, 65, 54)," +
    "(96, 19, 16)," +
    "(97, 24, 18)," +
    "(98, 37, 24)," +
    "(99, 82, 60)," +
    "(100, 33, 100);",
};

export { ordersServer };

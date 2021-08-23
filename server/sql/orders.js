function ordersDropTable() {
  const sql = "DROP TABLE IF EXISTS orders;";
  return sql;
}

function ordersCreateTable() {
  const sql =
    "CREATE TABLE orders (" +
    "id INT NOT NULL AUTO_INCREMENT," +
    "user_id INT NOT NULL," +
    "product_id INT NOT NULL," +
    "PRIMARY KEY (id)," +
    "FOREIGN KEY (user_id) REFERENCES users (id)," +
    "FOREIGN KEY (product_id) REFERENCES products (id)" +
    ");";
  return sql;
}

export { ordersDropTable, ordersCreateTable };

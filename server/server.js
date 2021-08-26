import { Sequelize } from "sequelize";
import { usersServer } from "./user.js";
import { productsServer } from "./products.js";
import { ordersServer } from "./orders.js";

const sequelize = new Sequelize("delilah", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
  define: {
    freezeTableName: true,
  },
});

await sequelize.authenticate(console.log("sequelize on"));

// await sequelize.query(usersServer.dropTable);
// await sequelize.query(usersServer.createTable);
// await sequelize.query(usersServer.insertInto);

// await sequelize.query(productsServer.dropTable);
// await sequelize.query(productsServer.createTable);
// await sequelize.query(productsServer.insertInto);

// await sequelize.query(ordersServer.dropTable);
// await sequelize.query(ordersServer.createTable);
// await sequelize.query(ordersServer.insertInto);

export { sequelize };

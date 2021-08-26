import { Sequelize } from "sequelize";
import { usersDropTable, usersCreateTable, usersInsertInto } from "./user.js";
import {
  productsDropTable,
  productsCreateTable,
  productsInsertInto,
} from "./products.js";
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

// await sequelize.query(usersDropTable());
// await sequelize.query(usersCreatetable());
// await sequelize.query(usersInsertInto());

// await sequelize.query(productsDropTable);
// await sequelize.query(productsCreateTable);
// await sequelize.query(productsInsertInto);

await sequelize.query(ordersServer.dropTable);
await sequelize.query(ordersServer.createTable);
await sequelize.query(ordersServer.insertInto);

export { sequelize };

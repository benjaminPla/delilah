import { Sequelize } from "sequelize";
import { usersDropTable, usersCreatetable, usersInsertInto } from "./user.js";

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

// await sequelize.query(productsDropTable());
// await sequelize.query(productsCreateTable());
// await sequelize.query(productsInsertInto());

// await sequelize.query(ordersDropTable());
// await sequelize.query(ordersCreateTable());

export { sequelize };
``;

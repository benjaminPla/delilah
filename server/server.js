import { Sequelize } from "sequelize";
import {
  usersDropTable,
  usersCreatetable,
  usersInsertInto,
} from "./sql/users.js";
import {
  productsDropTable,
  productsCreateTable,
  productsInsertInto,
} from "./sql/products.js";

const sequelize = new Sequelize("delilah", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false, //console.log,
  define: {
    freezeTableName: true,
  },
});

await sequelize
  .authenticate(console.log("sequelize on"))
  .catch((error) => console.log(error));

await sequelize.query(usersDropTable());
await sequelize.query(usersCreatetable());
await sequelize.query(usersInsertInto());

await sequelize.query(productsDropTable());
await sequelize.query(productsCreateTable());
await sequelize.query(productsInsertInto());

export { sequelize };

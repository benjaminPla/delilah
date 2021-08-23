import { Sequelize } from "sequelize";
import DataTypes from "sequelize";
import jwt from "jsonwebtoken";
import {
  usersDropTable,
  usersCreatetable,
  usersInsertInto,
} from "./sql/users.js";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize("delilah", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false, //console.log,
  define: {
    freezeTableName: true,
  },
});

try {
  await sequelize.authenticate();
  console.log("sequelize on");
} catch (error) {
  console.log(error);
}

await sequelize.query(usersDropTable());
await sequelize.query(usersCreatetable());
await sequelize.query(usersInsertInto());

async function usersFindAll() {
  return await sequelize.query("SELECT * FROM users WHERE 1", {
    type: "SELECT",
  });
}
async function userFindOne(userNameOrEmail) {
  return await sequelize.query(
    `SELECT * FROM users WHERE user_name = '${userNameOrEmail}' OR email = '${userNameOrEmail}'`,
    { type: "SELECT" }
  );
}
async function userPost(user) {
  const password = jwt.sign(process.env.SECURITY_TOKEN, user.password);
  await sequelize.query(
    `INSERT INTO users (user_name, full_name, email, phone_number, shipping_address, password)` +
      `VALUES ('${user.user_name}', '${user.full_name}', '${user.email}', '${user.phone_number}',` +
      `'${user.shipping_address}', '${password}') `,
    { type: "INSERT" }
  );
}
async function userDelete(user) {
  await sequelize.query(
    `DELETE FROM users WHERE user_name = '${user[0].user_name}'`,
    { type: "DELETE" }
  );
}
async function userPut(user) {
  await sequelize.query(
    "UPDATE users SET full_name = ?, phone_number = ?, shipping_address = ? WHERE user_name = ? OR email = ?",
    {
      replacements: [
        user.full_name,
        user.phone_number,
        user.shipping_address,
        user.user_name,
        user.email,
      ],
      type: "UPDATE",
    }
  );
}

const Product = sequelize.define(
  "Product",
  {
    product_name: { type: DataTypes.STRING(50), allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "products",
  }
);
// await Product.sync({ force: true });
// const newProduct = Product.build({
//   product_name: "product1",
//   price: 10,
// });
// await newProduct.save();

async function productsFindAll() {
  return await sequelize.query("SELECT * FROM products WHERE 1", {
    type: "SELECT",
  });
}
async function productFindOne(productName) {
  return await sequelize.query(
    "SELECT * FROM products WHERE product_name = ?",
    { replacements: [productName], type: "SELECT" }
  );
}
async function productPost(product) {
  await sequelize.query(
    "INSERT INTO products (product_name, price) VALUES (?, ?)",
    {
      replacements: [product.product_name, product.price],
      type: "INSERT",
    }
  );
}
async function productDelete(product) {
  await sequelize.query("DELETE FROM products WHERE product_name = ?", {
    replacements: [product[0].product_name],
    type: "DELETE",
  });
}
async function productPut(product) {
  await sequelize.query(
    "UPDATE products SET price = ? WHERE product_name = ?",
    { replacements: [product.price, product.product_name], type: "UPDATE" }
  );
}

// const Order = sequelize.define(
//   "Order",
//   {
//     user_id: { type: DataTypes.STRING(10), allowNull: false },
//     products_id: { type: DataTypes.INTEGER, allowNull: false },
//   },
//   {
//     timestamps: false,
//     tableName: "orders",
//   }
// );
// await Order.sync({ force: true });
// const newOrder = Order.build({
//   user_id: "1",
//   products_id: "1",
// });
// await newOrder.save();

export {
  usersFindAll,
  userFindOne,
  userPost,
  userDelete,
  userPut,
  productsFindAll,
  productFindOne,
  productPost,
  productDelete,
  productPut,
};

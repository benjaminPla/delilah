import { Sequelize } from "sequelize";
import DataTypes from "sequelize";
import jwt from "jsonwebtoken";
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

const User = sequelize.define(
  "User",
  {
    user_name: { type: DataTypes.STRING(50), allowNull: false },
    first_name_and_last_name: { type: DataTypes.STRING(50), allowNull: false },
    email: { type: DataTypes.STRING(50), allowNull: false },
    phone_number: { type: DataTypes.STRING(50), allowNull: false },
    shipping_address: { type: DataTypes.STRING(50), allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: false,
    tableName: "users",
  }
);
// await User.sync({ force: true });
// const suPassword = jwt.sign(process.env.SECURITY_TOKEN, "1234");
// const newUser = User.build({
//   user_name: "su",
//   first_name_and_last_name: "super admin",
//   email: "su@example.com",
//   phone_number: "666",
//   shipping_address: "address",
//   password: suPassword,
// });
// await newUser.save();

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
    `INSERT INTO users (user_name, first_name_and_last_name, email, phone_number, shipping_address, password)` +
      `VALUES ('${user.user_name}', '${user.first_name_and_last_name}', '${user.email}', '${user.phone_number}',` +
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
    "UPDATE users SET first_name_and_last_name = ?, phone_number = ?, shipping_address = ? WHERE user_name = ? OR email = ?",
    {
      replacements: [
        user.first_name_and_last_name,
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

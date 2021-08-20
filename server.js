import { Sequelize } from "sequelize";
import DataTypes from "sequelize";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

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
  await sequelize.query(
    `INSERT INTO users (user_name, first_name_and_last_name, email, phone_number, shipping_address, password)` +
      `VALUES ('${user.user_name}', '${user.first_name_and_last_name}', '${user.email}', '${user.phone_number}',` +
      `'${user.shipping_address}', '${user.password}') `,
    { type: "INSERT" }
  );
}
async function userDelete(user) {
  await sequelize.query(
    `DELETE FROM users WHERE user_name = '${user[0].user_name}'`,
    { type: "DELETE" }
  );
}
async function userPut(old, put) {
  let fields = [];
  let field = "";
  let value = "";
  if (old.user_name !== put.user_name) {
    field = "user_name";
    fields.push(field);
    value = put.user_name;
    userPutQuery(field, value, put);
  }
  if (old.first_name_and_last_name !== put.first_name_and_last_name) {
    field = "first_name_and_last_name";
    fields.push(field);
    value = put.first_name_and_last_name;
    userPutQuery(field, value, put);
  }
  if (old.email !== put.email) {
    field = "email";
    fields.push(field);
    value = put.email;
    userPutQuery(field, value, put);
  }
  if (old.phone_number !== put.phone_number) {
    field = "phone_number";
    fields.push(field);
    value = put.phone_number;
    userPutQuery(field, value, put);
  }
  if (old.shipping_address !== put.shipping_address) {
    field = "shipping_address";
    fields.push(field);
    value = put.shipping_address;
    userPutQuery(field, value, put);
  }
  return fields;
}
async function userPutQuery(field, value, put) {
  await sequelize.query(
    `UPDATE users SET ${field} = '${value}' WHERE user_name = '${put.user_name}' OR email = '${put.email}'`,
    {
      type: "UPDATE",
    }
  );
}

export { usersFindAll, userFindOne, userPost, userDelete, userPut };

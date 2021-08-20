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

export { usersFindAll, userFindOne, userPost, userDelete };

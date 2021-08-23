import { sequelize } from "./server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function usersFindAll() {
  return await sequelize.query("SELECT * FROM users WHERE 1", {
    type: "SELECT",
  });
}
async function userFindOne(userNameOrEmail) {
  return await sequelize.query(
    "SELECT * FROM users WHERE user_name = :value OR email = :value",
    { replacements: { value: userNameOrEmail }, type: "SELECT" }
  );
}
async function userPost(user) {
  const password = jwt.sign(process.env.SECURITY_TOKEN, user.password);
  await sequelize.query(
    "INSERT INTO users (user_name, full_name, email, phone_number, shipping_address, password) VALUES (?, ?, ?, ?,?, ?) ",
    {
      replacements: [
        user.user_name,
        user.full_name,
        user.email,
        user.phone_number,
        user.shipping_address,
        password,
      ],
      type: "INSERT",
    }
  );
}
async function userDelete(user) {
  await sequelize.query("DELETE FROM users WHERE user_name = ?", {
    replacements: [user[0].user_name],
    type: "DELETE",
  });
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

export { usersFindAll, userFindOne, userPost, userDelete, userPut };

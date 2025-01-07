// src/config/sequelize.ts
import { Sequelize } from "sequelize-typescript";
import { User } from "../schemas/user.model";
import { Post } from "../schemas/post.model";

const DATABASE_URL = "postgres://postgres:root@localhost:5436/db_HitoSH";

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  models: [User, Post], // Importa aquí tus modelos
});

import sequelize from "sequelize";
import { dbConfig } from "./database.js";

const connection = new sequelize(dbConfig)
connection.sync()

try {
  await connection.authenticate();
  console.log('SQL Conectado');
} catch (error) {
  console.error('Problema:', error);
}

export { connection };

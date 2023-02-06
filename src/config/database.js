import dotenv from "dotenv";
dotenv.config();

var dbConfig = {
  dialect: "mssql",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: false,
  },
};

export { dbConfig };

import express from "express";
import path from "path";
import { connection } from "./src/config/connection.js";
import { routerBase } from "./routes/routes.js";
import { routerModules } from "./routes/routesModules.js";
import { routerForm } from "./routes/routesForms.js";
import cookieParser from "cookie-parser";

const app = express();
connection;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "./views"));

app.use(express.static(path.join(process.cwd(), "/static")));
app.use(express.static("static/img"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("", routerBase);
app.use("/modules", routerModules);
app.use("/forms", routerForm);

// respond with "hello world" when a GET request is made to the homepage
app.listen(5500, () => {
  console.log("Servidor Rodando...");
});

import express from "express";
import routes from "./application/routes";
import { connectToMongoDB } from "./infrastructure/database/mongoose/config/db.config";
import { syncDatabase } from "./infrastructure/database/sequelize/config/db.init";
import { errorHandler } from "./application/middlewares/error-handler.middleware";
import cookieParser from "cookie-parser";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());
app.use("/api", routes);
// TODO: implement this -> app.use(errorHandler);


// parser les cookies
app.use(cookieParser());

connectToMongoDB();
syncDatabase();
export default app;

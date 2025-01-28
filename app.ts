import express from "express";
import routes from "./src/application/routes";
import { connectToMongoDB } from "./src/infrastructure/database/mongoose/config/db.config";
import { sequelize } from "./src/infrastructure/database/sequelize/config/db.config";

const app = express();

app.use(express.json());
app.use("/api", routes);
// TODO: implement this -> app.use(errorHandler);
// TODO: add CORS

connectToMongoDB();
sequelize.sync({
  alter: true,
});

export default app;

import express from "express";
import routes from "./application/routes";
import { connectToMongoDB } from "./infrastructure/database/mongoose/config/db.config";
import { syncDatabase } from "./infrastructure/database/sequelize/config/db.init";


const app = express();

app.use(express.json());
app.use("/api", routes);
// TODO: implement this -> app.use(errorHandler);
// TODO: add CORS

connectToMongoDB();
syncDatabase();

export default app;

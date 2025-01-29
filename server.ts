import dotenv from "dotenv";
import app from "./app";
import logger from "./src/infrastructure/logger/logger";

dotenv.config();

const PORT = 3000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
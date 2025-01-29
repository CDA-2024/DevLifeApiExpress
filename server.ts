import dotenv from "dotenv";
import logger from "./src/infrastructure/logger/logger";
import app from "./src/app";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

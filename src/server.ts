import dotenv from "dotenv";
import logger from "./infrastructure/logger/logger";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}/`);
});

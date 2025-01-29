import winston from "winston";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const logDirectory = path.resolve(__dirname, "../../../logs");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const { combine, timestamp, printf, colorize } = winston.format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    colorize(),
    customFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/errors.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

export default logger;

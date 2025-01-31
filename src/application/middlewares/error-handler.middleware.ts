import { NextFunction, Request, Response } from "express";
import { CustomErrorHandler } from "../custom-error-handler";
import logger from "../../infrastructure/logger/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof CustomErrorHandler) {
    statusCode = err.statusCode;
    message = err.message;
  }

  logger.error(`[ERROR] ${statusCode} - ${message}`);

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

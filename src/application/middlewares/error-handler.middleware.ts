import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { CustomErrorHandler } from "../custom-error-handler";
import logger from "../../infrastructure/logger/logger";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof CustomErrorHandler) {
    statusCode = err.statusCode;
    message = err.message;
  }

  logger.error(`[ERROR] ${statusCode} - ${message}`);

  res.status(statusCode).json({
    success: false,
    message,
  });
};

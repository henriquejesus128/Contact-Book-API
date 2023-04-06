import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  console.error(error.message, error.name);
  return res.status(500).json({
    message: error.message,
  });
};
export default errorHandler;

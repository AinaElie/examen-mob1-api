import { NextFunction } from "express";

import { ApiError } from "./api-error";

export const BadRequestError = (message: string, next: NextFunction) => {
  const badRequestError = new ApiError(message, 400);
  next(badRequestError);
};

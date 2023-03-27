import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const dataValidMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: false,
      });
      req.body = validated;
      return next();
    } catch (err) {
      return res.status(400).json({ message: err.errors });
    }
  };
export default dataValidMiddleware;

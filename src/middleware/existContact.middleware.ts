import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const existContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const findContact = await contactRepository.findOneBy({ id: req.params.id });

  if (!findContact) {
    return res.status(409).json({ message: "Contact exists!" });
  }

  return next();
};

export default existContactMiddleware;

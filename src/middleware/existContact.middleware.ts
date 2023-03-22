import { NextFunction, Request, Response } from "express";
import { string } from "pg-format";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const existContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const { id } = req.user;
  const { email } = req.body;
  console.log(id);
  const findContact = await contactRepository.findOneBy({ email: email });
  console.log(findContact.user);

  if (findContact) {
    return res.status(409).json({ message: "Contact exists!" });
  }

  return next();
};

export default existContactMiddleware;

import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";

const contactValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const { id } = req.user;
  const { email } = req.body;

  const findContact = await contactRepository.findOne({
    where: { email: email },
    relations: { user: true },
  });

  if (findContact.user.id == id) {
    return res.status(409).json({ message: "Contact exists!" });
  }

  return next();
};

export default contactValidMiddleware;

import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";

const existContactUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const { id } = req.user;
  const { email } = req.body;

  const user = await userRepository.findOneBy({ id: id });

  // const findContact = await contactRepository.findOne({
  //   where: { email: email },
  //   relations: { user: true },
  // });

  // if (findContact.user.id == id) {
  //   return res.status(409).json({ message: "Contact exists!" });
  // }

  // const findContact = await contactRepository.findOneBy({ email: email });

  // if (findContact) {
  //   return res.status(409).json({ message: "Contact exists!" });
  // }

  return next();
};

export default existContactUserMiddleware;

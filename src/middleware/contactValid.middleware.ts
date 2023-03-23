import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";

const contactValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.user;
  const { email } = req.body;

  // const findContact = await AppDataSource.getRepository(User)
  //   .createQueryBuilder("users")
  //   .leftJoin("user.contacts", "contact")
  //   .where("user.id = :id", { id: id })
  //   .andWhere("contact.email = :email", { email: email })
  //   .getOne();

  // console.log(findContact);

  // if (findContact) {
  //   return res.status(409).json({ message: "Contact exists!" });
  // }

  return next();
};

export default contactValidMiddleware;

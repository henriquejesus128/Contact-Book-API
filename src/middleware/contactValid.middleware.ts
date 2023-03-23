import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const contactValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email: userEmail } = req.user;
  const { email } = req.body;

  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.find({
    relations: { user: true },
    select: { email: true },
  });

  const filterContacts = findContact.filter(
    (contact) => contact.email === email
  );

  const findUser = filterContacts.filter(
    (contact) => contact.user.email === userEmail
  );

  if (findUser.length > 0) {
    throw new AppError(`Contact already registered for this user!`, 400);
  }

  return next();
};

export default contactValidMiddleware;

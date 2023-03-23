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
  const { id } = req.user;
  const { email } = req.body;

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  if (findUser.contacts[email] == email) {
    throw new AppError(`Contact already registered for this user!`, 400);
  }

  return next();
};

export default contactValidMiddleware;

import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ email: email });

  if (findUser) {
    return res.status(409).json({ message: "User exists!" });
  }

  return next();
};

export default userExistsMiddleware;

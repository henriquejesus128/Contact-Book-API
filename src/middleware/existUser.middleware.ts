import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, phone } = req.body;
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ email: email });
  const findPhone = await userRepository.findOneBy({ phone: phone });

  if (findUser) {
    return res.status(409).json({ message: "User exists!" });
  }

  if (findPhone) {
    return res.status(409).json({ message: "Phone exists!" });
  }

  return next();
};

export default userExistsMiddleware;

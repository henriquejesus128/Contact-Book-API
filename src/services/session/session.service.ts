import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../entities/user.entity";
import { ISessionReq } from "../../interfaces/session";

const sessionService = async ({
  email,
  password,
}: ISessionReq): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { email: email } });

  const { isActive } = user;

  if (!isActive) {
    throw new AppError(`inactive user!`, 400);
  }

  if (!user) {
    throw new AppError(`User or password invalid!`, 403);
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError(`User or password invalid!`, 403);
  }

  const token = jwt.sign(
    { email: user.email, isActive: user.isActive },
    process.env.SECRET_KEY!,
    { expiresIn: `24h`, subject: user.id }
  );
  return { token };
};
export default sessionService;

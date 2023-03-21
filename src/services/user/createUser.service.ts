import { IUser, IUserReq } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";

const createUserService = async (body: IUserReq): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const { email } = body;

  const foundUser = await userRepository.findOneBy({ email: email });

  if (foundUser) {
    throw new AppError(`User already exists!`, 409);
  }

  const user = userRepository.create(body);

  await userRepository.save(user);

  const newUser = await userReturned.validate(user, { stripUnknown: true });

  return newUser;
};
export default createUserService;

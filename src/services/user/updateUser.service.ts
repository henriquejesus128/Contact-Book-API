import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users";
import { userReturned } from "../../schemas/user/user.schemas";

const updateUserService = async (
  id: string,
  body: IUserUpdate
): Promise<IUserUpdate> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  if (findUser) {
    throw new AppError(`User does not exist!`, 409);
  }

  const updateUser = userRepository.create({
    ...findUser,
    ...body,
  });

  await userRepository.save(updateUser);

  const newUser = await userReturned.validate(updateUser, {
    stripUnknown: true,
  });
  return newUser;
};
export default updateUserService;

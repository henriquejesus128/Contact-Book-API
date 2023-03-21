import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id });

  if (findUser) {
    throw new AppError(`User does not exist!`, 409);
  }

  const { isActive } = findUser;

  if (!isActive) {
    throw new AppError("Disabled user!", 400);
  }

  findUser.isActive = false;
  await userRepository.save(findUser);
  await userRepository.softRemove(findUser);

  return {};
};
export default deleteUserService;

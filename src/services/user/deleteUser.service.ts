import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const { isActive } = user;

  if (!isActive) {
    throw new AppError("Disabled user!", 400);
  }

  user.isActive = false;
  await userRepository.save(user);

  return {};
};
export default deleteUserService;

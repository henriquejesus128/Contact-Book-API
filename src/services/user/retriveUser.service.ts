import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userReturned } from "../../schemas/user/user.schemas";

const retriveUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  if (findUser) {
    throw new AppError(`User does not exist!`, 409);
  }

  const foundUser = await userReturned.validate(findUser, {
    stripUnknown: true,
  });

  return foundUser;
};
export default retriveUserService;

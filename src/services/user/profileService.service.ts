import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userReturned } from "../../schemas/user/user.schemas";

const profileService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: id });

  const validUser = await userReturned.validate(findUser, {
    stripUnknown: true,
  });

  return validUser;
};
export default profileService;

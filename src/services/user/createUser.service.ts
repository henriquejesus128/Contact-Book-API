import { IUser, IUserReq } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userReturned } from "../../schemas/user/user.schemas";

const createUserService = async (body: IUserReq): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(body);

  await userRepository.save(user);

  console.log(user, `User`);
  const validUser = await userReturned.validate(user, { stripUnknown: true });
  console.log(validUser, `Schema`);

  return validUser;
};
export default createUserService;

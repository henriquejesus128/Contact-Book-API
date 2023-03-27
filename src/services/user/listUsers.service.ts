import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { listUsers } from "../../schemas/user/user.schemas";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const validListUsers = await listUsers.validate(users, {
    stripUnknown: true,
  });

  return validListUsers;
};
export default listUsersService;

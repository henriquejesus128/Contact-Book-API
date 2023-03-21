import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { listUsers } from "../../schemas/user/user.schemas";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const newListUsers = await listUsers.validate(users, {
    stripUnknown: true,
  });

  return newListUsers;
};
export default listUsersService;

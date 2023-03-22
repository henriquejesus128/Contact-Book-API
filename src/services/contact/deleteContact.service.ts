import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id });

  if (!findContact) {
    throw new AppError(`User does not exist!`, 409);
  }

  await contactRepository.remove(findContact);

  return {};
};
export default deleteContactService;

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IContact } from "../../interfaces/contacts";
import { listContacts } from "../../schemas/contact/contact.schemas";

const listContactsService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
    relations: { contacts: true },
  });

  const validListContact = await listContacts.validate(user.contacts, {
    stripUnknown: true,
  });

  return validListContact;
};
export default listContactsService;

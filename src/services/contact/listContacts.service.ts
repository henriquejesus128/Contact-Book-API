import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contacts";
import { ITokenUser } from "../../interfaces/users";
import { listContacts } from "../../schemas/contact/contact.schemas";

const listContactsService = async (user: ITokenUser): Promise<IContact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.findOne({
    where: { id: user.id },
    relations: { user: true },
  });

  const validListContact = await listContacts.validate(contacts, {
    stripUnknown: true,
  });

  return validListContact;
};
export default listContactsService;

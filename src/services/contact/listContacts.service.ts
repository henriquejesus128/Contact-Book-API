import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contacts";
import { listContacts } from "../../schemas/contact/contact.schemas";

const listContactsService = async (): Promise<IContact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();

  const validListContact = await listContacts.validate(contacts, {
    stripUnknown: true,
  });

  return validListContact;
};
export default listContactsService;

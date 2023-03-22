import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { IContactUpdate } from "../../interfaces/contacts";
import { contactReturned } from "../../schemas/contact/contact.schemas";

const updateContactService = async (
  id: string,
  body: IContactUpdate
): Promise<IContactUpdate> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id: id });

  if (!findContact) {
    throw new AppError(`Contact does not exist!`, 409);
  }

  const updateContact = contactRepository.create({
    ...findContact,
    ...body,
  });

  await contactRepository.save(updateContact);

  const validContact = await contactReturned.validate(updateContact, {
    stripUnknown: true,
  });

  return validContact;
};
export default updateContactService;

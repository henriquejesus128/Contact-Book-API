import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { IContact, IContactReq } from "../../interfaces/contacts";
import { contactReturned } from "../../schemas/contact/contact.schemas";

const createContactService = async (body: IContactReq): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const { email } = body;

  const foundContact = await contactRepository.findOneBy({ email });

  if (foundContact) {
    throw new AppError(`Contact exists!`, 409);
  }

  const contact = contactRepository.create(body);

  await contactRepository.save(contact);

  const validContact = await contactReturned.validate(contact, {
    stripUnknown: true,
  });

  return validContact;
};

export default createContactService;

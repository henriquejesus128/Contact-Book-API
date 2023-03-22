import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IContact, IContactReq } from "../../interfaces/contacts";
import { ITokenUser } from "../../interfaces/users";
import { contactReturned } from "../../schemas/contact/contact.schemas";

const createContactService = async (
  body: IContactReq,
  user: ITokenUser
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);
  const { email } = body;
  const { id } = user;

  const foundContact = await contactRepository.findOneBy({ email });

  if (foundContact) {
    throw new AppError(`Contact exists!`, 409);
  }

  const foundUser = await userRepository.findOneBy({ id });

  const contact = contactRepository.create(body);

  contact.user = foundUser;

  await contactRepository.save(contact);

  const validContact = await contactReturned.validate(contact, {
    stripUnknown: true,
  });

  return validContact;
};

export default createContactService;

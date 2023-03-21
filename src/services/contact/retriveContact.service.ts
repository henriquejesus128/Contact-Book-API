import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";
import { contactReturned } from "../../schemas/contact/contact.schemas";

const retriveContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({ id: id });

  if (findContact) {
    throw new AppError(`Contact does not exist!`, 409);
  }

  const validContact = await contactReturned.validate(findContact, {
    stripUnknown: true,
  });

  return validContact;
};
export default retriveContactService;

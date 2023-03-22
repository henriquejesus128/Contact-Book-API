import { Request, Response } from "express";
import createContactService from "../../services/contact/createContact.service";
import deleteContactService from "../../services/contact/deleteContact.service";
import listContactsService from "../../services/contact/listContacts.service";
import retriveContactService from "../../services/contact/retriveContact.service";
import updateContactService from "../../services/contact/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body, req.user);
  return res.status(201).json(newContact);
};

export const listContactsController = async (req: Request, res: Response) => {
  const array = await listContactsService(req.user);
  return res.status(200).json(array);
};

export const retriveContactController = async (req: Request, res: Response) => {
  const data = await retriveContactService(req.params.id);
  return res.status(200).json(data);
};

export const updateContactController = async (req: Request, res: Response) => {
  const data = await updateContactService(req.params.id, req.body);
  return res.status(200).json(data);
};

export const deleteContactController = async (req: Request, res: Response) => {
  const data = await deleteContactService(req.params.id);
  return res.status(204).json(data);
};

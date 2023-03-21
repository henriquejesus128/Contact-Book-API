import { Request, Response } from "express";

export const createContactController = async (req: Request, res: Response) => {
  const newContact = await createContactService(req.body);
  return res.status(201).json(newContact);
};

export const listContactsController = async (req: Request, res: Response) => {
  const array = await listContactsService();
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

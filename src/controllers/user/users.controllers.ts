import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";
import deleteUserService from "../../services/user/deleteUser.service";
import listUsersService from "../../services/user/listUsers.service";
import profileService from "../../services/user/profileService.service";
import retriveUserService from "../../services/user/retriveUser.service";
import updateUserService from "../../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body);
  return res.status(201).json(data);
};

export const listUsersController = async (req: Request, res: Response) => {
  const array = await listUsersService();
  return res.status(200).json(array);
};

export const retriveUserController = async (req: Request, res: Response) => {
  const data = await retriveUserService(req.params.id);
  return res.status(200).json(data);
};

export const updateUserController = async (req: Request, res: Response) => {
  const data = await updateUserService(req.user.id, req.body);
  return res.status(200).json(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const data = await deleteUserService(req.user.id);
  return res.status(204).json(data);
};

export const profileController = async (req: Request, res: Response) => {
  console.log(req.user.id);
  const data = await profileService(req.user.id);
  return res.status(200).json(data);
};

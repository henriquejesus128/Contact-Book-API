import * as yup from "yup";
import { ObjectSchema } from "yup";
import { IUser, IUserReq, IUserUpdate } from "../../interfaces/users";

export const userSchema: ObjectSchema<IUserReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  phone: yup.string().min(20).required(),
});

export const userUpdate: ObjectSchema<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().min(6).notRequired(),
  phone: yup.string().min(20).notRequired(),
});

export const userReturned: ObjectSchema<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  deletedAt: yup.date().required(),
});

export const listUsers = yup.array();

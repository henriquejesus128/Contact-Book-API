import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserReq, IUserUpdate } from "../../interfaces/users";

export const userSchema: SchemaOf<IUserReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  phone: yup.string().min(20).required(),
});

export const userUpdate: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().min(6).required(),
  phone: yup.string().min(20).required(),
});

export const userReturned: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  deletedAt: yup.date().notRequired(),
});

export const listUsers = yup.array();

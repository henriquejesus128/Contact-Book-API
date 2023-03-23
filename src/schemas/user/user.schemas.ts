import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserReq, IUserUpdate } from "../../interfaces/users";

export const userSchema: SchemaOf<IUserReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  photo: yup.string().nullable().notRequired(),
  phone: yup.string().max(20).required(),
});

export const userUpdate: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup.string().min(6).notRequired(),
  photo: yup.string().nullable().notRequired(),
  phone: yup.string().max(20).notRequired(),
});

export const userReturned: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  photo: yup.string().nullable().notRequired(),
  phone: yup.string().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export const listUsers = yup.array(userReturned);

import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactReq,
  IContactUpdate,
  INotUserContact,
} from "../../interfaces/contacts";
import { userReturned } from "../user/user.schemas";

export const contactSchema: SchemaOf<IContactReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  photo: yup.string().nullable().notRequired(),
  phone: yup.string().max(20).required(),
});

export const contactUpdate: SchemaOf<IContactUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  photo: yup.string().nullable().notRequired(),
  phone: yup.string().max(20).notRequired(),
});

export const contactReturned: SchemaOf<IContact> = yup.object().shape({
  user: userReturned,
  updatedAt: yup.date().required(),
  createdAt: yup.date().required(),
  phone: yup.string().required(),
  photo: yup.string().nullable().notRequired(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  id: yup.string().required(),
});

export const notUserReturned: SchemaOf<INotUserContact> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  photo: yup.string().nullable().notRequired(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export const listContacts = yup.array(notUserReturned);

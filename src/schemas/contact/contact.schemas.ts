import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactReq,
  IContactUpdate,
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
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  photo: yup.string().nullable().notRequired(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  user: userReturned,
});

export const listContacts = yup.array(contactReturned);

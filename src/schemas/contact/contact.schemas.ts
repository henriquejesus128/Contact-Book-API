import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContact,
  IContactReq,
  IContactUpdate,
} from "../../interfaces/contacts";

export const contactSchema: SchemaOf<IContactReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(20).required(),
});

export const contactUpdate: SchemaOf<IContactUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().min(20).required(),
});

export const contactReturned: SchemaOf<IContact> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export const listContacts = yup.array();

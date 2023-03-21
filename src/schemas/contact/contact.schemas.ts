import * as yup from "yup";
import { ObjectSchema } from "yup";
import {
  IContact,
  IContactReq,
  IContactUpdate,
} from "../../interfaces/contacts";

export const contactSchema: ObjectSchema<IContactReq> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(20).required(),
});

export const contactUpdate: ObjectSchema<IContactUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().min(20).required(),
});

export const contactReturned: ObjectSchema<IContact> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  phone: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

export const listContacts = yup.array();

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
  phone: yup.string().min(20).notRequired(),
});

export const contactReturned: ObjectSchema<IContact> = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});

export const listContacts = yup.array();

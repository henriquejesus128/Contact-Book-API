import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISessionReq } from "../../interfaces/session";

export const sessionSchema: SchemaOf<ISessionReq> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

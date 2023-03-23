import { IUser } from "../users";

export interface IContactReq {
  name: string;
  email: string;
  photo?: string | null | undefined;
  phone: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  photo?: string | null | undefined;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}
export interface IListContact {
  id: string;
  name: string;
  email: string;
  photo?: string | null | undefined;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  photo?: string | null | undefined;
  phone?: string;
}

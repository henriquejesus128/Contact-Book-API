export interface IContactReq {
  name: string;
  email: string;
  photo: string;
  phone: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  photo: string;
  phone?: string;
}

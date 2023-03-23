export interface IUserReq {
  name: string;
  email: string;
  password: string;
  photo: string;
  phone: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  photo: string;
  phone?: string;
}

export interface ITokenUser {
  id: string;
  email: string;
}

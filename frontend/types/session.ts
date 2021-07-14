import IUser from "types/user";

export default interface ISession {
  user: IUser;
  id: number;
  expires: string;
  token: string;
}

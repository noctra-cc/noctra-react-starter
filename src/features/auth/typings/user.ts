export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
}

export interface ISession {
  user: Omit<IUser, "password">;
}

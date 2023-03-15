export interface IProducts {
  id?: number,
  name: string,
  amount: string,
}

export interface IUser {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
}

export interface IOrders {
  id?: number,
  userId: number,
}

export interface ILogin {
  username: string,
  password: string,
}

export interface IName {
  name: string;
}

export interface IAmount {
  amount: string,
}

export interface IUsername {
  username: string,
}

export interface IVocation {
  vocation: string,
}

export interface ILevel {
  level: number,
}

export interface IPassword {
  password: string,
}
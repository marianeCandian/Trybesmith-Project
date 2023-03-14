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
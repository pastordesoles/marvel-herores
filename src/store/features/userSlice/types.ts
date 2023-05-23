export interface User {
  userName: string;
  email: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

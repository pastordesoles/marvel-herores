export interface User {
  username: string;
  email: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

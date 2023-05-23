import { type User } from '../../store/features/userSlice/types';
export interface UserCredentials {
  userName: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserDataPersistance extends User {
  surname: string;
}

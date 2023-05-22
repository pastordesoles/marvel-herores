import { type User } from '../../store/features/userSlice/types';
export interface UserCredentials {
  username: string;
  surname: string;
  email: string;
  password: string;
}

export interface UserDataPersistance extends User {
  surname: string;
}

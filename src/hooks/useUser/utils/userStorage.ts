import AsyncStorage from '@react-native-async-storage/async-storage';
import { type UserDataPersistance } from '../types';

const userStorage = {
  async storeItem(data: UserDataPersistance) {
    try {
      const entries = Object.entries(data);
      await Promise.all(
        entries.map(([key, value]) =>
          AsyncStorage.setItem(key, value as string),
        ),
      );
    } catch (error) {
      throw new Error(`Error storing data`);
    }
  },

  async removeItem(keys: string | string[]) {
    try {
      if (Array.isArray(keys)) {
        await Promise.all(keys.map((key) => AsyncStorage.removeItem(key)));
      } else {
        await AsyncStorage.removeItem(keys);
      }
    } catch (error) {
      throw new Error(`Error removing items `);
    }
  },
};

export default userStorage;

import AsyncStorage from '@react-native-async-storage/async-storage';

const CacheManager = {
  save: async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving data', e);
    }
  },
  load: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error('Error loading data', e);
    }
  },
};

export default CacheManager;

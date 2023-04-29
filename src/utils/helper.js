import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeToAsyncStorage = async (item, value) => {
  try {
    await AsyncStorage.setItem(item, value);
    console.log(item, value);
  } catch (error) {
    // Error saving data
    console.log('error --->storeToAsyncStorage', error);
  }
};

export const getFromAsyncStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(key, value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log('error --->getFromAsyncStorage', error);
  }
};

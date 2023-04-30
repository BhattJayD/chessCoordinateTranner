import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Observer} from 'mobx-react';
import Routes from './src/routes';
import ThemeStore from './src/store/ThemeStore';
import {getFromAsyncStorage} from './src/utils/helper';
import StorageConstants from './src/utils/StorageConstants';
import SplashScreen from 'react-native-splash-screen';
import Lottie from 'lottie-react-native';
import AppStore from './src/store/AppStore';
import AuthStore from './src/store/AuthStore';

const App = () => {
  const getTheme = async () => {
    const defaultTheme = JSON.parse(
      await getFromAsyncStorage(StorageConstants.DEFAULT_THEME),
    );

    if (defaultTheme) {
      ThemeStore.setField('defaultThemeIndex', defaultTheme);
      ThemeStore.setField(
        'lightColor',
        ThemeStore.themes[defaultTheme].lightColor,
      );
      ThemeStore.setField(
        'darkColor',
        ThemeStore.themes[defaultTheme].darkColor,
      );
    }
  };
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      AuthStore.setField('isLoggedin', true);
    }, 1500);
    getTheme();
  }, []);

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <Routes />
        </View>
      )}
    </Observer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeStore.backGroundColor,
  },
});

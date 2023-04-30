import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Observer} from 'mobx-react';
import Routes from './src/routes';
import ThemeStore from './src/store/ThemeStore';
import {getFromAsyncStorage} from './src/utils/helper';
import StorageConstants from './src/utils/StorageConstants';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';
import AppStore from './src/store/AppStore';
import AuthStore from './src/store/AuthStore';
import GameStore from './src/store/GameStore';

const App = () => {
  const getTheme = async () => {
    AppStore.requestUserPermission();
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
    GameStore.scoreGraber();
    // AsyncStorage.removeItem(StorageConstants.SCORE);
    setTimeout(() => {
      AuthStore.setField('isLoggedin', true);
    }, 1500);
    getTheme();
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
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

import {makeAutoObservable} from 'mobx';
import {Dimensions} from 'react-native';

import {createNavigationContainerRef} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

export const navigationRef = createNavigationContainerRef();

class appStore {
  constructor() {
    makeAutoObservable(this);
  }
  height = Dimensions.get('window').height;
  width = Dimensions.get('window').width;

  fcmToken = '';
  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.count = 1;
    this.fcmToken = '';
  }

  handelScreenNavigation(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
  handelScreenGoBack(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.goBack(name, params);
    }
  }

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );

    if (enabled) {
      console.log('Authorization status:', authStatus);
      this.getToken();
    }
  };
  async getToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      this.setField('fcmToken', fcmToken);
      messaging()
        .subscribeToTopic('All_Users')
        .then(() => console.log('Subscribed to topic!'));
      // user has a device token
    }
  }
}
const AppStore = new appStore();
export default AppStore;

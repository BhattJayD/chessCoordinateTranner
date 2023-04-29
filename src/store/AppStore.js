import {makeAutoObservable} from 'mobx';
import {Dimensions} from 'react-native';

import {createNavigationContainerRef} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

class appStore {
  constructor() {
    makeAutoObservable(this);
  }
  height = Dimensions.get('window').height;
  width = Dimensions.get('window').width;

  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.count = 1;
  }

  handelScreenNavigation(name, params) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  }
}
const AppStore = new appStore();
export default AppStore;

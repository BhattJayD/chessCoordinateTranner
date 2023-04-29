import {makeAutoObservable} from 'mobx';
import {Dimensions} from 'react-native';

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
}
const AppStore = new appStore();
export default AppStore;

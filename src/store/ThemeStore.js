import {makeAutoObservable} from 'mobx';

class themeStore {
  constructor() {
    makeAutoObservable(this);
  }

  darkColor = '#779556';
  lightColor = '#EBECD0';

  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.darkColor = '#779556';
    this.lightColor = '#EBECD0';
  }
}
const ThemeStore = new themeStore();
export default ThemeStore;

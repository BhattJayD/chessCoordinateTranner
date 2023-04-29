import {makeAutoObservable} from 'mobx';

class authStore {
  constructor() {
    makeAutoObservable(this);
  }
  isLoggedin = false;
  count = 1;
  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.count = 1;
  }
}
const AuthStore = new authStore();
export default AuthStore;

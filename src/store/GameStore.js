import {makeAutoObservable} from 'mobx';

class gameStore {
  constructor() {
    makeAutoObservable(this);
  }
  isWhite = true;
  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.isWhite = true;
  }
}
const GameStore = new gameStore();
export default GameStore;

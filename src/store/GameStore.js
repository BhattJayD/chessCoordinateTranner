import {makeAutoObservable} from 'mobx';

class gameStore {
  constructor() {
    makeAutoObservable(this);
  }
  isWhite = true;
  counter = 10;
  showGameOverModal = false;
  showGameTypeModal = false;
  selectedGameTime = 0;
  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.isWhite = true;
    this.counter = 0;
    this.showGameOverModal = false;
    this.showGameTypeModal = false;
    this.selectedGameTime = 0;
  }
}
const GameStore = new gameStore();
export default GameStore;

import {makeAutoObservable} from 'mobx';
import {getFromAsyncStorage, storeToAsyncStorage} from '../utils/helper';
import StorageConstants from '../utils/StorageConstants';

class gameStore {
  constructor() {
    makeAutoObservable(this);
  }
  isWhite = true;
  counter = 10;
  showGameOverModal = false;
  showGameTypeModal = false;
  selectedGameTime = 0;
  currentScore = 0;
  totalScore = 0;
  gamePlayedTime = 0;
  avgScore = 0;
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
    this.currentScore = 0;
    this.totalScore = 0;
    this.gamePlayedTime = 0;
    this.avgScore = 0;
  }

  scoreSaver = async () => {
    try {
      let score = 0;
      try {
        score = JSON.parse(await getFromAsyncStorage(StorageConstants.SCORE));
      } catch (error) {
        console.log('error getting score', error);
      }

      if (score != 0) {
        await storeToAsyncStorage(
          StorageConstants.SCORE,
          JSON.stringify(score + this.currentScore),
        );
        this.setField('totalScore', score + this.currentScore);
      } else {
        await storeToAsyncStorage(
          StorageConstants.SCORE,
          JSON.stringify(this.currentScore),
        );
        this.setField('totalScore', this.currentScore);
      }

      let gamePlayedTime = 0;
      try {
        gamePlayedTime = JSON.parse(
          await getFromAsyncStorage(StorageConstants.GAME_PLAYED_TIME),
        );
      } catch (error) {
        console.log('error getting score', error);
      }
      if (gamePlayedTime) {
        this.gamePlayedTime = gamePlayedTime;
      }

      this.setField('avgScore', this.totalScore / this.gamePlayedTime);

      setTimeout(() => {
        this.setField('currentScore', 0);
      }, 700);
    } catch (error) {
      console.log(error, 'error scoreSaver');
    }
  };

  scoreGraber = async () => {
    try {
      let score = 0;
      try {
        score = JSON.parse(await getFromAsyncStorage(StorageConstants.SCORE));
      } catch (error) {
        console.log('error getting score', error);
      }
      if (score) {
        this.totalScore = score;
      }

      let gamePlayedTime = 0;
      try {
        gamePlayedTime = JSON.parse(
          await getFromAsyncStorage(StorageConstants.GAME_PLAYED_TIME),
        );
      } catch (error) {
        console.log('error getting score', error);
      }
      if (gamePlayedTime) {
        this.gamePlayedTime = gamePlayedTime;
      }
    } catch (error) {
      console.log(error, 'error scoreGraber');
    }
  };
}

const GameStore = new gameStore();
export default GameStore;

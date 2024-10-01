import {makeAutoObservable} from 'mobx';

class themeStore {
  constructor() {
    makeAutoObservable(this);
  }

  themes = [
    {
      id: 0,
      themeName: 'Light Green',
      lightColor: '#EBECD0',
      darkColor: '#779556',
    },
    {
      id: 1,
      themeName: 'Light Wood',
      lightColor: '#F1D9B5',
      darkColor: '#B58863',
    },
    {
      id: 2,
      themeName: 'Ash Teal',
      lightColor: '#BAC5C1',
      darkColor: '#5B7D86',
    },
    {
      id: 3,
      themeName: 'Classic Style',
      lightColor: '#D2CFCC',
      darkColor: '#3D3838',
    },
    {
      id: 4,
      themeName: 'Dark Blue',
      lightColor: '#E7F0EB',
      darkColor: '#002262',
    },
    {
      id: 5,
      themeName: 'Dark maroon',
      lightColor: '#9E4784',
      darkColor: '#5F264A',
    },
    {
      id: 6,
      themeName: 'Dark orange',
      lightColor: '#FFE5CA',
      darkColor: '#F58840',
    },
  ];

  get initialThemes() {
    return this.themes;
  }

  defaultThemeIndex = 0;
  darkColor = '#779556';
  lightColor = '#EBECD0';
  backGroundColor = '#2A2B37'; //'#2D2727'

  setField(value, data) {
    this[value] = data;
    console.log(value, data);
  }
  resetFiels() {
    this.darkColor = '#779556';
    this.lightColor = '#EBECD0';
    this.backGroundColor = '#2D2727';
    this.defaultThemeIndex = 0;
  }
}
const ThemeStore = new themeStore();
export default ThemeStore;

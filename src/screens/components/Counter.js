import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';
import {Observer} from 'mobx-react';
import GameStore from '../../store/GameStore';
import ThemeStore from '../../store/ThemeStore';
import * as Progress from 'react-native-progress';
import AppStore from '../../store/AppStore';

const Counter = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (GameStore.counter >= 1) {
        GameStore.setField('counter', GameStore.counter - 1);
      }
      if (GameStore.counter === 10 || GameStore.counter === 9) {
        Vibration.vibrate(1 * 100);
      }
      if (GameStore.counter === 0 && GameStore.showGameOverModal !== true) {
        GameStore.setField('showGameOverModal', true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Observer>
      {() => (
        <View>
          <Progress.Bar
            progress={GameStore.counter / GameStore.selectedGameTime}
            width={AppStore.width}
            borderColor={ThemeStore.lightColor}
            color={ThemeStore.darkColor}
          />
        </View>
      )}
    </Observer>
  );
};
export default Counter;

const styles = StyleSheet.create({
  text: {color: ThemeStore.lightColor, fontWeight: '600'},
  WarningText: {color: ThemeStore.darkColor, fontWeight: '600'},
});

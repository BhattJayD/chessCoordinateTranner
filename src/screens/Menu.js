import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AppStore from '../store/AppStore';
import ThemeStore from '../store/ThemeStore';
const Menu = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={'#146C94'}
        onPress={() => {
          AppStore.handelScreenNavigation('Theme');
        }}>
        <Text style={styles.menuItemText}>Theme</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'#146C94'}
        onPress={() => {
          AppStore.handelScreenNavigation('Game');
        }}>
        <Text style={styles.menuItemText}>Game</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeStore.backGroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {color: '#fff'},
});

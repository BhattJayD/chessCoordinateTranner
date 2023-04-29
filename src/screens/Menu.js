import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AppStore from '../store/AppStore';
import ThemeStore from '../store/ThemeStore';
import IconPack from '../utils/IconPack';
const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexWrap}>
        <TouchableHighlight
          style={styles.highlightStyle}
          underlayColor={'#4141498f'}
          onPress={() => {
            AppStore.handelScreenNavigation('Theme');
          }}>
          <View style={styles.buttonStyle}>
            <Image source={IconPack.THEME} style={styles.iconStyle} />
            <Text style={styles.menuItemText}>Theme</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.highlightStyle}
          underlayColor={'#4141498f'}
          onPress={() => {
            AppStore.handelScreenNavigation('Game');
          }}>
          <View style={styles.buttonStyle}>
            <Image source={IconPack.CHESS} style={styles.iconStyle} />
            <Text style={styles.menuItemText}>Game</Text>
          </View>
        </TouchableHighlight>
      </View>
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
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  iconStyle: {height: 25, width: 25},
  highlightStyle: {
    padding: 24,
    backgroundColor: '#414149',
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

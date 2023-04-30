import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AppStore from '../store/AppStore';
import ThemeStore from '../store/ThemeStore';
import IconPack from '../utils/IconPack';
import GameTypeModal from './components/GameTypeModal';
import GameStore from '../store/GameStore';
import Animated, {FadeIn} from 'react-native-reanimated';
import {Observer} from 'mobx-react';
const Menu = () => {
  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <Animated.ScrollView
            contentContainerStyle={styles.container}
            entering={FadeIn.duration(500)}>
            <GameTypeModal />
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
                  GameStore.setField('showGameTypeModal', true);
                }}>
                <View style={styles.buttonStyle}>
                  <Image source={IconPack.CHESS} style={styles.iconStyle} />
                  <Text style={styles.menuItemText}>Game</Text>
                </View>
              </TouchableHighlight>
              {GameStore.avgScore > 0 && (
                <View style={styles.highlightStyle}>
                  <View style={styles.buttonStyle}>
                    <Image source={IconPack.SCORE} style={styles.iconStyle} />

                    <Text numberOfLines={1} style={styles.menuItemText}>
                      {GameStore.avgScore}
                    </Text>
                  </View>
                </View>
              )}
              {GameStore.totalScore > 0 && (
                <View style={styles.highlightStyle}>
                  <View style={styles.buttonStyle}>
                    <Image source={IconPack.ALL} style={styles.iconStyle} />

                    <Text numberOfLines={1} style={styles.menuItemText}>
                      {GameStore.totalScore}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </Animated.ScrollView>
        </View>
      )}
    </Observer>
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
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  iconStyle: {height: 25, width: 25},
  highlightStyle: {
    // padding: 24,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414149',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

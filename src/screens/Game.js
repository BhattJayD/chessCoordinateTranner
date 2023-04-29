import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Vibration,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Observer} from 'mobx-react';
import ChessBoard from './ChessBoard';
import ThemeStore from '../store/ThemeStore';
import IconPack from '../utils/IconPack';

const COL_NAME = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8};
const ROW_NAME = {8: 1, 7: 2, 6: 3, 5: 4, 4: 5, 3: 6, 2: 7, 1: 8};

const Game = () => {
  const [KEY, setKEY] = useState('B8');
  const [color, setColor] = useState('#fff');
  const [showCords, setShowCords] = useState(false);

  useEffect(() => {
    randomGenrator();
  }, []);

  const randomGenrator = () => {
    const randomNum = Math.floor(Math.random() * 8);
    var randomFirstDigit = String.fromCharCode(65 + randomNum);
    var randomSecondDigit = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
    setKEY(randomFirstDigit + randomSecondDigit);
    console.log(KEY);
  };

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 16,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowCords(!showCords);
              }}>
              <Image
                style={[
                  styles.eyeImageStyle,
                  {tintColor: showCords ? '#fff' : '#000'},
                ]}
                resizeMode="contain"
                source={IconPack.CHESS}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: color,
                fontSize: 37,
                fontWeight: '900',
                textAlign: 'center',
              }}>
              {KEY}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowCords(!showCords);
              }}>
              <Image
                style={styles.eyeImageStyle}
                resizeMode="contain"
                source={showCords ? IconPack.VIEW : IconPack.HIDE}
              />
            </TouchableOpacity>
          </View>
          <ChessBoard
            boardColor={ThemeStore.lightColor}
            squareColor={ThemeStore.darkColor}
            onPress={(row, col) => {
              var firstLatter = KEY[0];
              var secondLatter = KEY[1];
              var colValuse = COL_NAME[firstLatter];
              var rowValuse = ROW_NAME[secondLatter];
              if (colValuse === col + 1 && rowValuse === row + 1) {
                randomGenrator();
              } else {
                setColor('red');
                setTimeout(() => {
                  setColor('#fff');
                }, 1000);
                Vibration.vibrate(1 * 100);
              }
            }}
            showCords={showCords}
          />
        </View>
      )}
    </Observer>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeStore.backGroundColor,
  },
  eyeImageStyle: {height: 25, width: 25, tintColor: '#fff'},
});

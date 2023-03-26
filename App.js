import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Vibration} from 'react-native';
import ChessBoard from './src/screens/ChessBoard';

const COL_NAME = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8};
const ROW_NAME = {7: 1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7, 0: 8};

const App = () => {
  const [KEY, setKEY] = useState('');
  const [color, setColor] = useState('#779556');

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
    <View style={styles.container}>
      <Text style={{color: color}}>KEY:- {KEY}</Text>
      <ChessBoard
        boardColor={'#EBECD0'}
        squareColor={'#779556'}
        onPress={(row, col) => {
          var firstLatter = KEY[0];
          var secondLatter = KEY[1];
          var colValuse = COL_NAME[firstLatter];
          var rowValuse = ROW_NAME[secondLatter];
          if (colValuse === col + 1 && rowValuse === row) {
            randomGenrator();
          } else {
            setColor('red');
            setTimeout(() => {
              setColor('green');
            }, 1000);
            Vibration.vibrate(1 * 500);
          }
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2727',
  },
});

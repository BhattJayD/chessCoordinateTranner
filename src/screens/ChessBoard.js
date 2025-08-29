import {Observer} from 'mobx-react';
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import GameStore from '../store/GameStore';

const BOARD_SIZE = 8;

const colMap = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
};

const rowMap = {1: 8, 2: 7, 3: 6, 4: 5, 5: 4, 6: 3, 7: 2, 8: 1};

// const KEY = 'C6';
const HEADER_OFFSET = 100;

const ChessBoard = ({boardColor, squareColor, onPress, showCords}) => {
  const {width, height} = useWindowDimensions();
  const boardSize = Math.min(width, height - HEADER_OFFSET);
  const squareSize = boardSize / BOARD_SIZE;

  const renderSquare = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const backgroundColor = isDarkSquare ? squareColor : boardColor;
    return (
      <Observer key={`${row}-${col}`}>
        {() => (
          <TouchableOpacity
            onPress={() => {
              onPress(row, col);
            }}
            key={`${row}-${col}`}
            style={[
              styles.square,
              {backgroundColor, width: squareSize, height: squareSize},
            ]}>
            {showCords && (
              <Text
                style={
                  GameStore.isWhite
                    ? styles.whiteCordsText
                    : styles.blackCordsText
                }>
                {colMap[col + 1]} {rowMap[row + 1]}
              </Text>
            )}
          </TouchableOpacity>
        )}
      </Observer>
    );
  };

  const renderRow = row => {
    const squares = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      squares.push(renderSquare(row, col));
    }
    return (
      <View key={row} style={styles.row}>
        {squares}
      </View>
    );
  };

  const rows = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    rows.push(renderRow(row));
  }

  return (
    <View style={[styles.board, {width: boardSize, height: boardSize}]}>
      {rows}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 0.1,
  },
  whiteCordsText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 10,
    color: '#555',
    fontWeight: 'bold',
  },
  blackCordsText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 10,
    color: '#555',
    fontWeight: 'bold',
    transform: [{rotate: '180deg'}],
  },
});

export default ChessBoard;

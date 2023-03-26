import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';

const BOARD_SIZE = 8;

// const KEY = 'C6';
const ChessBoard = ({boardColor, squareColor, onPress}) => {
  const {width} = Dimensions.get('window');
  const squareSize = width / BOARD_SIZE;

  const renderSquare = (row, col) => {
    const isDarkSquare = (row + col) % 2 === 1;
    const backgroundColor = isDarkSquare ? squareColor : boardColor;
    return (
      <TouchableOpacity
        onPress={() => {
          onPress(row, col);
        }}
        key={`${row}-${col}`}
        style={[
          styles.square,
          {backgroundColor, width: squareSize, height: squareSize},
        ]}
      />
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

  return <View style={[styles.board, {width}]}>{rows}</View>;
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
});

export default ChessBoard;

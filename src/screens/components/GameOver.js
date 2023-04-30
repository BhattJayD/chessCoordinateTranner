import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import GameStore from '../../store/GameStore';
import {Observer} from 'mobx-react';
import AppStore from '../../store/AppStore';
import {getFromAsyncStorage, storeToAsyncStorage} from '../../utils/helper';
import StorageConstants from '../../utils/StorageConstants';

const GameOver = () => {
  const onPressRestart = () => {
    GameStore.setField('showGameOverModal', false);
    GameStore.scoreSaver();
    GameStore.setField('counter', GameStore.selectedGameTime);
  };
  const onPressClose = () => {
    GameStore.setField('showGameOverModal', false);
    GameStore.scoreSaver();
    AppStore.handelScreenGoBack();
  };
  return (
    <Observer>
      {() => (
        <View style={{}}>
          <Modal
            visible={GameStore.showGameOverModal}
            animationType="slide"
            transparent={true}>
            <View style={styles.modallView}>
              <View style={styles.rowWrap}>
                <TouchableOpacity onPress={async () => onPressClose()}>
                  <Text style={styles.closeShareText}>Close</Text>
                </TouchableOpacity>

                <Text style={styles.gameOverText}>Game Over</Text>

                <TouchableOpacity
                  onPress={() => console.log('Share button pressed')}>
                  <Text style={styles.closeShareText}>Share</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.center}>
                <TouchableOpacity
                  style={styles.restartButtomStyle}
                  onPress={() => onPressRestart()}>
                  <Text style={styles.closeShareText}>Restart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </Observer>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  modallView: {
    height: 150,
    backgroundColor: '#3D3E4A',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
    margin: 16,
  },
  rowWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  gameOverText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
  },
  closeShareText: {
    fontSize: 16,
    color: '#fff',
  },
  restartButtomStyle: {
    backgroundColor: '#146C948f',
    width: '70%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  center: {justifyContent: 'center', alignItems: 'center'},
});

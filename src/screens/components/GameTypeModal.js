import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native';
import GameStore from '../../store/GameStore';
import {Observer} from 'mobx-react';
import AppStore from '../../store/AppStore';
import IconPack from '../../utils/IconPack';
import {storeToAsyncStorage} from '../../utils/helper';
import StorageConstants from '../../utils/StorageConstants';

const GameTypeModal = () => {
  const TimeData = [5, 30, 60, 120, 180, 240, '∞'];
  const onPressTime = i => {
    storeToAsyncStorage(
      StorageConstants.GAME_PLAYED_TIME,
      JSON.stringify(GameStore.gamePlayedTime + 1),
    );
    GameStore.setField('showGameTypeModal', false);
    GameStore.setField('selectedGameTime', i != '∞' ? i : -1);
    GameStore.setField('counter', i != '∞' ? i : -1);
    AppStore.handelScreenNavigation('Game');
  };
  return (
    <Observer>
      {() => (
        <View style={{}}>
          <Modal
            visible={GameStore.showGameTypeModal}
            animationType="slide"
            onRequestClose={() => {
              GameStore.setField('showGameTypeModal', false);
            }}
            transparent={true}>
            <View style={styles.modallView}>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {TimeData.map((i, index) => (
                  <TouchableHighlight
                    key={index}
                    style={styles.highlightStyle}
                    underlayColor={'#4141498f'}
                    onPress={() => onPressTime(i)}>
                    <View>
                      <Image
                        source={IconPack.CHESS_CLOCK}
                        style={styles.iconStyle}
                      />
                      <Text style={styles.menuItemText}>{i}</Text>
                    </View>
                  </TouchableHighlight>
                ))}
              </View>
            </View>
          </Modal>
        </View>
      )}
    </Observer>
  );
};

export default GameTypeModal;

const styles = StyleSheet.create({
  modallView: {
    minHeight: 150,
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
  highlightStyle: {
    padding: 24,
    backgroundColor: '#414149',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 90,
    margin: 15,
  },
  iconStyle: {height: 25, width: 25},
  menuItemText: {color: '#fff', fontSize: 16},
});

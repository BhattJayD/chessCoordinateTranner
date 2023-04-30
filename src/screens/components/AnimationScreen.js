import React from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native';
import AppStore from '../../store/AppStore';
const AnimationScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Lottie
        loop={true}
        autoPlay
        resizeMode="cover"
        style={{
          width: AppStore.width / 2,
          height: AppStore.height / 3,
        }}
        source={require('../../assets/rook.json')}
      />
    </View>
  );
};

export default AnimationScreen;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Observer} from 'mobx-react';
import PostLogin from './navigation/PostLogin';
import AppStore, {navigationRef} from './store/AppStore';
import AuthStore from './store/AuthStore';
import AnimationScreen from './screens/components/AnimationScreen';

export default function Routes() {
  return (
    <Observer>
      {() => (
        <NavigationContainer ref={navigationRef}>
          {AuthStore.isLoggedin ? <PostLogin /> : <AnimationScreen />}
        </NavigationContainer>
      )}
    </Observer>
  );
}

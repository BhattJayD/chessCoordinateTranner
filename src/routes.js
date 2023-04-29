import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Observer} from 'mobx-react';
import PostLogin from './navigation/PostLogin';
import {navigationRef} from './store/AppStore';

export default function Routes() {
  return (
    <Observer>
      {() => (
        <NavigationContainer ref={navigationRef}>
          <PostLogin />
        </NavigationContainer>
      )}
    </Observer>
  );
}

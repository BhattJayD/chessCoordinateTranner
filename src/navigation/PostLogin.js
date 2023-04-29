import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Menu from '../screens/Menu';
import Game from '../screens/Game';
import Theme from '../screens/Theme';

const PostLogin = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Theme"
        component={Theme}
        options={{headerShown: true, title: 'Themes'}}
      />

      <Stack.Screen
        name="Game"
        component={Game}
        options={{headerShown: true, title: 'Training'}}
      />
    </Stack.Navigator>
  );
};

export default PostLogin;

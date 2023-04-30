import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Menu from '../screens/Menu';
import Game from '../screens/Game';
import Theme from '../screens/Theme';
import {Text} from 'react-native';

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
        options={{
          headerShown: true,
          title: 'Themes',
          headerStyle: {backgroundColor: '#3D3E4A'},
        }}
      />

      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: true,
          title: 'Training',
          headerStyle: {backgroundColor: '#3D3E4A'},
        }}
      />
    </Stack.Navigator>
  );
};

export default PostLogin;



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/homeScreen';
import PuzzleScreen from './src/Screen/puzzleScreen';
import Success from './src/Screen/success';

const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {
  

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Puzzle" component={PuzzleScreen} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


export default App;

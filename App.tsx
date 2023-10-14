import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectFoodTypePage from './Screen/SelectFoodTypePage';
import SelectPicturePage from './Screen/SelectPicturePage';
import ConfirmPicturePage from './Screen/ConfirmPicturePage';
import DetailPage from './Screen/DetailPage';
import HistoryPage from './Screen/HistoryPage';
import SelectFoodFromAPIPage from './Screen/SelectFoodFromAPIPage';
import CameraPage from './Screen/CameraPage';

const Stack = createNativeStackNavigator();

interface FoodDetail {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  googleLink: string;
  imageURL: string;
  date: string;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SelectFoodTypePage" component={SelectFoodTypePage} options={{headerShown: false}} />
        <Stack.Screen name="CameraPage" component={CameraPage} options={{headerShown: false}} />
        <Stack.Screen name="ConfirmPicturePage" component={ConfirmPicturePage} options={{headerShown: false}} />
        <Stack.Screen name="SelectFoodFromAPIPage" component={SelectFoodFromAPIPage} options={{headerShown: false}} />
        <Stack.Screen name="HistoryPage" component={HistoryPage} options={{headerShown: false}} />
        <Stack.Screen name="DetailPage" component={DetailPage} options={{headerShown: false}} />
        <Stack.Screen name="SelectPicturePage" component={SelectPicturePage} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
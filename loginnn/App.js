import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/home';
import Login from './pages/login';
import Equipe from './pages/equipe';


const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
                            {/* exclui o cabeçalho */}
        <Stack.Navigator screenOptions={{headerShown: true}}> 
          <Stack.Screen name="Tela de login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Equipe" component={Equipe}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
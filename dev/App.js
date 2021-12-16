
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Home';
import Pedido from './screen/Pedidos';
import Entrega from './screen/entrega';


const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
                            {/* exclui o cabeçalho */}
        <Stack.Navigator screenOptions={{headerShown: true}}> 
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Pedidos" component={Pedido}/>
          <Stack.Screen name="Entrega" component={Entrega}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './home';
import Apag from './Apag';

const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={home}/>
          <Stack.Screen name="Apag" component={Apag}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;
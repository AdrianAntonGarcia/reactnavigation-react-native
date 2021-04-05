import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet} from 'react-native';

// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{title: 'Componente Principal'}}
          />
          {/* Headers dinámicos con la función flecha extraemos los props como si estuvieramos en el Componente */}
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({route: {params}}) => ({
              title: params.clienteId,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

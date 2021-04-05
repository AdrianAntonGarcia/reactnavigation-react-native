import {TabRouter} from '@react-navigation/routers';
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export const Nosotros = ({navigation, route: {params}}) => {
  console.log(params);
  const {clienteId} = params;
  const volver = () => {
    // navigation.navigate('Inicio');
    // navigation.push('Inicio');
    navigation.goBack();
  };
  return (
    <View style={styles.contenedor}>
      <Text>{clienteId}</Text>
      <Button title="Volver" onPress={() => volver()} />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;

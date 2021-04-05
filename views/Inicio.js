import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export const Inicio = ({navigation}) => {
  const visitarNosotros = () => {
    navigation.navigate('Nosotros');
  };
  return (
    <View style={styles.contenedor}>
      <Text>Inicio</Text>
      <Button title="Ir a nosotros" onPress={() => visitarNosotros()} />
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

export default Inicio;

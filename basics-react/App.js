import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// importamos el componente
import Contador from './components/Contador'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Contador />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

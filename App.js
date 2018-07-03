import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Header title" />
      </View>
    );
  }
}

export default App;
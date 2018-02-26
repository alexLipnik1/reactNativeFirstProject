import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/Root/App.style';
import NavigationBar from './src/components/Header/HeaderRoot/NavigationBar.js';
import Body from './src/components/Body/BodyRoot/Body.js';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
        <Body />
      </View>
    );
  }
}

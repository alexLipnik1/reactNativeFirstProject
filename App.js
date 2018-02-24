import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/app.style';
import NavigationBar from './src/components/header/NavigationBar';
import Body from './src/components/body/Body';

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

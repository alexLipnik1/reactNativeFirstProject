import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './src/Root/App.style';
import NavigationBar from './src/components/Header/HeaderRoot/NavigationBar.js';
import HomePage from './src/components/Body/HomePage/homePage.js';
import Tasks from './src/components/Body/Tasks/TeskList';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    tasks: {
      screen: Tasks,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
    },
  }
);


export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}

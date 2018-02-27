import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import styles from './src/Root/App.style';
import HomePage from './src/components/HomePage/homePage.js';
import Tasks from './src/components/Tasks/tasksPage';

import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27



const _icon = 'ios-cube';
const Tab = TabNavigator({
  Home: { screen: HomePage },
  Tasks: { screen: Tasks },
  },


  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `${_icon}${focused ? '' : '-outline'}`;
        } else if (routeName === 'Tasks') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions:{
      activeTintColor: '#66ff66',
      inactiveTintColor: 'gray',
      style: {
        height: 65,
        marginTop: 0,
        paddingTop: 25,
        backgroundColor: '#00001a',
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
  }
);


export default class App extends React.Component {

  render() {
    return (
        <Tab />
    );
  }
}

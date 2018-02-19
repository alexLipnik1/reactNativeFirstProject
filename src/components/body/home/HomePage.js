import {View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../../styles/bodyStyles/Body.style';
import Task from './task';

export default class HomePage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Task />
            </View>
        )
    }
}

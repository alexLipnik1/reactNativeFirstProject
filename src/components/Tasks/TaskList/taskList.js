import React, {Component} from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import Task from '../Task/task';
import FinishedTaskPage from '../FinishedTask/finishedTaskPage';
import styles from './taskList.style';

export default _List = (props) => {
    const {
        Tasks,
        toggleTask,
        toggleFinishedTaskOverlay,
        finishedTaskOverlay
    } = props; 

    return (
    <ScrollView  >
        <Overlay visible={finishedTaskOverlay}
            closeOnTouchOutside animationType="zoomIn"
            animationDuration={500} >
            <FinishedTaskPage handleOverlayPress={() => toggleFinishedTaskOverlay()}/>
        </Overlay>
        <List >{
            Tasks.map((l, i) => (
                <Task
                    key={i}
                    task={l}
                    _index={i}
                    toggleTask={toggleTask}
                    handleOverlayPress={() => toggleFinishedTaskOverlay()}
                    Tasks={Tasks}
                />
            ))}
        </List>  
    </ScrollView>
)}

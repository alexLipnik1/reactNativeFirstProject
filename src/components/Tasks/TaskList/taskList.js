import React, {Component} from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import Task from '../Task/task';
import FinishedTaskPage from '../FinishedTask/finishedTaskPage';
import styles from './taskList.style';

export default _List = (props) => {
    const {
        Tasks,
        lastActiveIndex,
        toggleTask,
        toggleFinishedTaskPage,
        finishedTaskPage,
        finishedTaskOverlay
    } = props; 

    return (
    <ScrollView  >
        <Overlay visible={finishedTaskOverlay}
            closeOnTouchOutside animationType="zoomIn"
            animationDuration={500} >
            <FinishedTaskPage toggleFinishedTaskPage={() => toggleFinishedTaskPage()}/>
        </Overlay>
        <List >{
            Tasks.map((l, i) => (
                <Task
                    key={i}
                    task={l}
                    _index={i}
                    toggleTask={toggleTask}
                    finishedTaskPage={finishedTaskPage}
                    Tasks={Tasks}
                />
            ))}
        </List>  
    </ScrollView>
)}

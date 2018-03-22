import React, {Component} from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import RemoveTaskPage from '../RemoveTask/removeTask';
import Task from '../Task/task';
import FinishedTaskPage from '../FinishedTask/finishedTaskPage';
import styles from './taskList.style';

export default _List = (props) => {
    const {
        changeTaskIndex,
        _changeTaskIndex,
        taskIndex,
        Tasks,
        lastActiveIndex,
        toggleTask,
        removeTask,
        toggleFinishedTaskPage,
        finishedTaskPage,
        removeTaskPage,
        toggleRemoveTaskPage,
        finishedTaskOverlay
    } = props; 

    return (
    <ScrollView  >
        <Overlay visible={finishedTaskOverlay}
            animationType="zoomIn"
            animationDuration={500} >
            <FinishedTaskPage toggleFinishedTaskPage={() => toggleFinishedTaskPage()}/>
        </Overlay>
        <Overlay visible={removeTaskPage}
            animationType="zoomIn"
            animationDuration={500} >
            <RemoveTaskPage taskIndex={taskIndex} removeTask={removeTask} toggleRemoveTaskPage={() =>{ toggleRemoveTaskPage(), console.log(taskIndex, 'list')}}/>
        </Overlay>
        <List >{
            Tasks.map((l, i) => (
                <GestureRecognizer 
                    key={i}            
                    onSwipeLeft={(state)=> {changeTaskIndex(state, i)}}//handleRemove(state, i)}
                >
                    <Task
                        key={i}
                        task={l}
                        _index={i}
                        toggleTask={toggleTask}
                        finishedTaskPage={finishedTaskPage}
                        Tasks={Tasks}
                    />    
                </GestureRecognizer>
            ))}
        </List>  
    </ScrollView>
)}

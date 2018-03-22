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

    const handleRemove = (state, i) => {    
        changeTaskIndex(state, i);
        toggleRemoveTaskPage();
    }

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
                    onSwipeLeft={(state)=> {handleRemove(state, i)}}//handleRemove(state, i)}
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

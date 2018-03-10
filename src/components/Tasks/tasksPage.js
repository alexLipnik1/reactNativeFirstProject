import React from 'react';

import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import update from 'immutability-helper';

import styles from './tasksPage.style'
import AddTaskPage from './AddTask/addTaskPage';
import List from './TaskList/taskList.js';

export default class TasksPage extends React.Component {
    constructor(){
        super();
        this.state = {
            addTaskPageOpen: false,
            finishedTaskPageOpen: false,
            tasks: [
                {taskName: 'First Task', importance: 0, active: false, finished: false},
                {taskName: 'Seconde Task', importance: 0, active: false, finished: false},
                {taskName: 'Third Task', importance: 0, active: false, finished: false},
            ],
            newTaskImportance: 0,
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log(nextState);
    }

    toggleAddTaskPage = () => {
        this.setState({
            ...this.state,
            addTaskPageOpen: !this.state.addTaskPageOpen,
        })
    }

    toggleTask = (props) => {
        const updateTask = this.state.tasks.map((obj, index) => {
            return index === props[1] ? props[0] : obj;
        });
        // console.log('taskPage', props)
        this.setState({
            ...this.state,
            tasks: updateTask,
        })
    }

    toggleFinishedTaskPage = (props) => {
        this.setState({
            ...this.state,
            finishedTaskPageOpen: !this.state.finishedTaskPageOpen,
        })
    }

    changeImportance = (num) => {
        this.setState({
            ...this.state,
            newTaskImportance: num 
        })
    }

    finishedTaskPage = (props) => {
        const updateTask = this.state.tasks.map((obj, index) => {
            return index === props[1] ? props[0] : obj;
        });
        this.setState({
            ...this.state,
            tasks: updateTask,
            finishedTaskPageOpen: !this.state.finishedTaskPageOpen,
        })
    }

    addTesk = (value, _importance) => {
        const {tasks} = this.state;
        
        this.setState({
            ...this.state,
            addTaskPageOpen: !this.state.addTaskPageOpen,
            tasks: [...tasks, value]
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <List 
                    lastActiveIndex = {this.state.lastActiveIndex}
                    finishedTaskPage={this.finishedTaskPage}
                    toggleFinishedTaskPage={this.toggleFinishedTaskPage}
                    toggleTask={this.toggleTask}
                    Tasks={this.state.tasks} 
                    finishedTaskOverlay={this.state.finishedTaskPageOpen}
                />

                <View style={styles.buttonContainer}>
                    <Button textStyle={styles.textStyle}
                            buttonStyle={styles.buttonStyle}
                            title='Add Task' onPress={this.toggleAddTaskPage}
                    />
                </View>

                <Overlay visible={this.state.addTaskPageOpen}
                    closeOnTouchOutside animationType="zoomIn"
                    containerStyle={styles.containerStyle}
                    childrenWrapperStyle={styles.childrenWrapperStyle}
                    animationDuration={500}>
                    <AddTaskPage 
                        changeImportance={this.changeImportance}
                        addTesk={this.addTesk}
                        newTaskImportance={this.state.newTaskImportance}
                    />
                </Overlay>
            </View>
        )
    }

}

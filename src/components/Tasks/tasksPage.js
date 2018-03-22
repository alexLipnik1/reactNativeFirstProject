import React from 'react';

import {AsyncStorage, View, Text } from 'react-native';
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
            removeTaskPageOpen: false,
            tasks: [
            ],
            taskIndex: 0,                        
            newTaskImportance: 0,
            newTaskName: '',
        }
    }

    componentDidMount() {
        // console.log('componentDidMount')
        AsyncStorage.getItem("state").then((value)=> {
            // console.log('get ',value)
            // console.log(JSON.parse(value))
            this.setState(JSON.parse(value));
        });
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState.taskIndex, 'componentWillupdate');
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state !== prevState) {
            // console.log('add',JSON.stringify(this.state))
            AsyncStorage.setItem("state", JSON.stringify(this.state));
        }
    }


    changeTaskIndex = (state, i) => {
        console.log('change', i)
        this.setState({
            ...this.state,
            taskIndex: i,
            removeTaskPageOpen: !this.state.removeTaskPageOpen
        })
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

    toggleRemoveTaskPage = (props) => {
        this.setState({
            ...this.state,
            removeTaskPageOpen: !this.state.removeTaskPageOpen,
        })
    }

    changeImportance = (num) => {
        this.setState({
            ...this.state,
            newTaskImportance: num 
        })
    }

    changeTaskName = (_newTaskName) => {
        this.setState({
            ...this.state,
            newTaskName: _newTaskName
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

    removeTask = (i) => {
        console.log(i, 'remove')
        const arr = [
            ...this.state.tasks.slice(0, i),
            ...this.state.tasks.slice(i+1)
        ]
        this.setState({
            tasks: arr,
            removeTaskPageOpen: !this.state.removeTaskPageOpen,
        })
    }

    addTesk = (value, _importance) => {
        // console.log(value)
        let obj = {taskName: value, importance: _importance, active: false, finished: false};

        this.setState({
            ...this.state,
            addTaskPageOpen: !this.state.addTaskPageOpen,
            tasks: [
                ...this.state.tasks,
                obj
            ]
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <List 
                    taskIndex={this.state.taskIndex}
                    _changeTaskIndex={this._changeTaskIndex}
                    changeTaskIndex={this.changeTaskIndex}
                    removeTask={this.removeTask}
                    removeTaskPage= {this.state.removeTaskPageOpen}
                    lastActiveIndex = {this.state.lastActiveIndex}
                    finishedTaskPage={this.finishedTaskPage}
                    toggleFinishedTaskPage={this.toggleFinishedTaskPage}
                    toggleRemoveTaskPage={this.toggleRemoveTaskPage}
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
                        changeTaskName={this.changeTaskName}
                        newTaskName={this.state.newTaskName}
                        changeImportance={this.changeImportance}
                        addTesk={this.addTesk}
                        newTaskImportance={this.state.newTaskImportance}
                    />
                </Overlay>
            </View>
        )
    }

}

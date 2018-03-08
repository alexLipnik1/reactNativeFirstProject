import React from 'react';

import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

import styles from './tasksPage.style'
import OverlayPage from './Overlay/overlayPage';
import List from './TaskList/taskList.js';

export default class TasksPage extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false,
            tasks: [
                {taskName: 'First Task', active: false},
                {taskName: 'Seconde Task', active: false},
                {taskName: 'Third Task', active: true},
            ],
        }
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
      }

    toggleOverlay = () => {
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    }

    toggleTask = (props) => {
        const updateTask = this.state.tasks.map((obj, index) => {
            return index === props[1] ? props[0] : obj;
        });
        this.setState({
            ...this.state,
            tasks: updateTask,
        })
    }

    addTesk = (value) => {
        let {tasks} = this.state; 

        this.setState({
            ...this.state,
            open: !this.state.open,
            tasks: [...tasks, value]
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <List toggleTask={this.toggleTask} Tasks={this.state.tasks} />

                <View style={styles.buttonContainer}>
                    <Button textStyle={styles.textStyle}
                            buttonStyle={styles.buttonStyle}
                            title='Add Task' onPress={this.toggleOverlay}
                    />
                </View>

                <Overlay visible={this.state.open}
                    closeOnTouchOutside animationType="zoomIn"
                    containerStyle={styles.containerStyle}
                    childrenWrapperStyle={styles.childrenWrapperStyle}
                    animationDuration={500}>
                    <OverlayPage addTesk={this.addTesk} />
                </Overlay>
            </View>
        )
    }

}

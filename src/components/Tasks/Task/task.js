import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import TaskActive from './TaskActive/taskActive';
import TaskRegular from './TaskRegular/taskRegular';
import TaskFinished from './TaskFinished/taskFinished';
import styles from './task.styles';

export default Task = (props) => {
    const {
        task,
        _index,
        toggleTask,
        finishedTaskPage,
        Tasks
    } = props;

    const TaskStyle = () => {
        if(task.finished){
            return(
                <TaskFinished 
                    task={task}
                    _index={_index}
                    Tasks={Tasks}
                />
            )
        }
        else{
            if(task.active){
                return(
                    <TaskActive
                        task={task}
                        _index={_index}
                        toggleTask={toggleTask}
                        finishedTaskPage={finishedTaskPage}
                        Tasks={Tasks}
                    />
                )
            }
            if(!task.active){
                return(
                    <TaskRegular 
                        task={task}
                        _index={_index}
                        toggleTask={toggleTask}
                        Tasks={Tasks}
                    />
                )
            }
        }
    }

    return (
        <TaskStyle />
    )
}
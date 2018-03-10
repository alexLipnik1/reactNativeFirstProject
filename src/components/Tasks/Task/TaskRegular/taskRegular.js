import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import styles from './taskRegular.styles';

export default TaskRegular = (props) => {
    const {
        task,
        _index,
        lastActiveIndex,
        toggleTask,
        finishedTaskPage,
        Tasks
    } = props;


    function handleTaskPress(){
        const newTask = {taskName: Tasks[this.index].taskName, active: !Tasks[this.index].active}
        return toggleTask([newTask ,this.index]);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={handleTaskPress}
                index={_index}
                style={ styles.taskBody } 
            >
                <View >
                    <View>
                        <Text  
                            style={styles.text} >
                            {task.taskName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.indicatorBody} >
                <View style={styles.indicator}></View>
            </View>
        </View>
    )
}
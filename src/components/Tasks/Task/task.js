import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import styles from './task.styles';

export default Task = (props) => {
    const _icon = 'ios-checkmark-circle-outline';    
    const {
        task,
        _index,
        toggleTask,
        handleOverlayPress,
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
                style={task.active ?
                    styles.taskBodyActive : 
                    styles.taskBody
                } 
            >
                <View >
                    <View 
                        style={
                            task.active ?
                            styles.textContainer : 
                            '' } >
                        <Text  
                            style={
                                task.active ?
                                styles.textActive : 
                                styles.text
                            } >
                            {task.taskName}
                        </Text>
                    </View>
                    { task.active ? 
                        <View style={styles.ActiveOptionsContainer}>
                            <View style={styles.notification}>

                            </View>
                            <View style={styles.importance}>

                            </View>
                            <TouchableOpacity 
                                style={styles.activeButton}
                                onPress={() => handleOverlayPress()}
                            >
                                <Text style={{fontWeight: '400', marginRight: 10, fontSize: 15}}>Finished</Text>
                                <Ionicons name={_icon} size={30} color='#000' />
                                
                            </TouchableOpacity>
                        </View>
                        :
                        <View />
                    }
                </View>
            </TouchableOpacity>
            <View style={styles.indicatorBody} >
                <View style={styles.indicator}></View>
            </View>
        </View>
    )
}
import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import ImportanceStyle from '../../AddTask/addTaskPage.Style'
import styles from '../task.styles';
const _icon = 'ios-checkmark-circle-outline';    


export default taskActive = (props) => {
    const {finishedTaskPage, toggleTask, task, _index, Tasks} = props;
    
    function handlePress(){
        const newTask = {
            taskName: Tasks[_index].taskName,
            active: Tasks[_index].active,
            finished: !Tasks[_index].finished
        }
        return finishedTaskPage([newTask ,_index]);
    }

    const Istyle = () => {
        // console.log(task)
        if(task.importance==0){
            return <View style={ImportanceStyle.importance_1}/>  
        }
        else if(task.importance==1){
            return <View style={ImportanceStyle.importance_2}/>
        }
        else if(task.importance==2){
            return <View style={ImportanceStyle.importance_3}/>
        }
        else return <View /> 
    }

    function handleTaskPress(){
        const newTask = {
            taskName: Tasks[this.index].taskName,
            importance: Tasks[this.index].importance,
            active: !Tasks[this.index].active,
        }
        return toggleTask([newTask ,this.index]);
    }

    return (
        <View style={styles.container}>
        <TouchableOpacity 
            onPress={handleTaskPress}
            index={_index}
            style={styles.taskBodyActive} 
        >
            <View >
                <View style={styles.textContainer} >
                    <Text style={styles.textActive}>
                        {task.taskName}
                    </Text>
                </View>
                <View style={styles.ActiveOptionsContainer}>
                    <Istyle />
                    <TouchableOpacity 
                        style={styles.activeButton}
                        onPress={handlePress}
                    >
                        <Text style={{fontWeight: '400', marginRight: 10, fontSize: 15}}>Finished</Text>
                        <Ionicons name={_icon} size={30} color='#000' />
                        
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        <View style={styles.indicatorBody} >
            <View style={styles.indicator}></View>
        </View>
    </View>


)}
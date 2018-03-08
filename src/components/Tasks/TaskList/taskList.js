import React, {Component} from 'react';
import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './taskList.style';
import index from 'react-native-modal-overlay';


export default _List = (props) => {
    const {Tasks, toggleTask} = props; 

    function handlePress(){
        const newTask = {taskName: Tasks[this.index].taskName, active: !Tasks[this.index].active}
        return toggleTask([newTask ,this.index]);
    }

    return (
    <ScrollView  >
        <List >{
            Tasks.map((l, i) => (
                    <View key={i} style={styles.container}>
                        <TouchableOpacity onPress={handlePress} index={i} style={l.active ? styles.taskBodyActive : styles.taskBody} >
                            <Text  style={styles.taxt}>
                                {l.taskName}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.indicatorBody} >
                            <View style={styles.indicator}></View>
                        </View>
                    </View>
            ))}
        </List>  
    </ScrollView>
)}

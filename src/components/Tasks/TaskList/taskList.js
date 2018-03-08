import React, {Component} from 'react';
import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import styles from './taskList.style';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

export default _List = (props) => {

    const {Tasks, toggleTask} = props; 
    const _icon = 'ios-checkmark-circle-outline';    

    function handlePress(){
        const newTask = {taskName: Tasks[this.index].taskName, active: !Tasks[this.index].active}
        return toggleTask([newTask ,this.index]);
    }

    return (
    <ScrollView  >
        <Overlay visible={false}
            closeOnTouchOutside animationType="zoomIn"
            containerStyle={styles.containerStyle}
            childrenWrapperStyle={styles.childrenWrapperStyle}
            animationDuration={500}>
            <Text>{'hello'}</Text>
        </Overlay>
        <List >{
            Tasks.map((l, i) => (
                    <View key={i} style={styles.container}>
                        <TouchableOpacity 
                            onPress={handlePress}
                            index={i}
                            style={l.active ?
                                styles.taskBodyActive : 
                                styles.taskBody
                            } 
                        >
                            <View >
                                <View 
                                    style={
                                        l.active ?
                                        styles.textContainer : 
                                        '' } >
                                    <Text  
                                        style={
                                            l.active ?
                                            styles.textActive : 
                                            styles.text
                                        } >
                                        {l.taskName}
                                    </Text>
                                </View>
                                { l.active ? 
                                    <View style={styles.ActiveOptionsContainer}>
                                        <View style={styles.notification}>

                                        </View>
                                        <View style={styles.importance}>

                                        </View>
                                        <TouchableOpacity style={styles.activeButton} >
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
            ))}
        </List>  
    </ScrollView>
)}

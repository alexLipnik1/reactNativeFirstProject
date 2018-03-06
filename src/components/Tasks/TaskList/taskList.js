import React, {Component} from 'react';
import { List, ListItem } from 'react-native-elements';
import { Text, View, ScrollView } from 'react-native';
import styles from './taskList.style';


export default _List = (props) => {
    const {Tasks} = props; 

    return (
    <ScrollView  >
        <List >{
            Tasks.map((l, i) => (
                    <View key={i} style={styles.container}>
                        <View style={styles.taskBody}>
                            <View style={styles.triangle2}/> 
                            <View style={styles.triangle1}/> 
                            <Text style={styles.taxt}>
                                {l.taskName}
                            </Text>
                        </View>
                        <View style={styles.indicatorBody} >
                            <View style={styles.indicator}></View>
                        </View>
                    </View>
            ))}
        </List>  
    </ScrollView>
)}

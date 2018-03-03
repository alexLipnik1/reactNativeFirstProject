import React, {Component} from 'react';
import { List, ListItem } from 'react-native-elements';
import { Text, View, ScrollView } from 'react-native';

export default _List = (props) => {
    const {Tasks} = props; 

    return (
    <ScrollView style={{flex: 1}} >
        <List >{
            Tasks.map((l, i) => (
                    <View key={i} style={{padding: 20, borderBottomWidth: 1,}}>
                            <Text>
                                {l.taskName}
                            </Text>
                    </View>
            ))}
        </List>  
    </ScrollView>
)}

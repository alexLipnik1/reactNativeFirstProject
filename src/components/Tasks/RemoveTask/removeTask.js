import React, {Component} from 'react';
import { View, TouchableOpacity,  Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import index from 'react-native-modal-overlay';

const removeTaskPage = (props) => {
    const {
        toggleRemoveTaskPage,
        removeTask,
        taskIndex
    }= props;

    return(
    <View>
        <Text>Are you sure you want to remove this task?</Text>
        <Button onPress={()=>removeTask(taskIndex)} title="Yes"/>
        <Button onPress={toggleRemoveTaskPage} title="No"/>
    </View>
)}

export default removeTaskPage;
import React, {Component} from 'react';
import { View, TouchableOpacity,  Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './addTaskPage.Style';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import index from 'react-native-modal-overlay';

export default OverlayPage = (props) => {
    const {addTesk, changeImportance, changeTaskName ,newTaskName, newTaskImportance} = props;

    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.header}>Add Task</Text>
                <Container style={{width: 250, height: 100, marginRight: 10}}>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Task Name</Label>
                                <Input onChangeText={
                                    (value) => changeTaskName(value)
                                }/>
                            </Item>
                    </Form>
                    </Content>
                </Container>
                <View style={styles.settingsContainer}>
                    <Text style={styles.settingHeader}>Importance</Text>
                    <View style={styles.importance}>
                        <TouchableOpacity 
                            style={ newTaskImportance==0 ? styles.importance_1_active: styles.importance_1}
                            onPress={() => changeImportance(0)}
                        />
                        <TouchableOpacity 
                            style={ newTaskImportance==1 ? styles.importance_2_active: styles.importance_2}
                            onPress={() => changeImportance(1)}

                        />
                        <TouchableOpacity 
                            style={ newTaskImportance==2 ? styles.importance_3_active: styles.importance_3}
                            onPress={() => changeImportance(2)}

                        />
                    </View>
                </View>
                <Button textStyle={styles.textStyle}
                        buttonStyle={styles.buttonStyle}
                        title='Submit' onPress={() => addTesk(newTaskName, newTaskImportance)}
                />
            </View>
        </ScrollView>
    )
}
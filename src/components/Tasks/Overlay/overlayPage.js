import React, {Component} from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './overlay.Style';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default OverlayPage = (props) => {
    let Task = '';
    const {addTesk} = props;


    const handlePress = () => {
        addTesk(Task);
    }

    const changedText = (value) => {
        Task = {taskName: value, active: false};
    }

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Add Task</Text>
            <Container style={{width: 250, marginBottom: 50}}>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Task Name</Label>
                        <Input onChangeText={changedText}/>
                    </Item>
                </Form>
                </Content>
            </Container>
            <Button textStyle={styles.textStyle}
                    buttonStyle={styles.buttonStyle}
                    title='Submit' onPress={handlePress}
            />
        </View>
    )
}
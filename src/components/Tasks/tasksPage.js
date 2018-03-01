import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import styles from './tasksPage.style'
import OverlayPage from './Overlay/overlayPage';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
]

export default class TasksPage extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false,
            tasks: [{task: '1'}],
        }
    }

    toggleOverlay = () => {
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    }

    sendTesk = (value) => {
        console.log(this.state.tasks)
        this.setState({
            ...this.state,
            open: !this.state.open,
            tasks: value
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <List>{
                    list.map((l, i) => (
                    <ListItem
                        roundAvatar
                        avatar={{uri:l.avatar_url}}
                        key={i}
                        title={l.name}
                    />))}
                </List>   

                <View style={styles.buttonContainer}>
                    <Button textStyle={styles.textStyle}
                            buttonStyle={styles.buttonStyle}
                            title='Add Task' onPress={this.toggleOverlay}
                    />
                </View>

                <Overlay visible={this.state.open}
                    closeOnTouchOutside animationType="zoomIn"
                    containerStyle={styles.containerStyle}
                    childrenWrapperStyle={styles.childrenWrapperStyle}
                    animationDuration={500}>
                    <OverlayPage sendTesk={this.sendTesk} />
                </Overlay>
            </View>
        )
    }

}
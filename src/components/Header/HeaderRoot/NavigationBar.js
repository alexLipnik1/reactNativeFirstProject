import { StyleSheet, Text, View, Button, BackAndroid } from 'react-native';
import React from 'react';
import styles from './NavigationBar.style';
import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const home = (<Icon name="bars" size={25} />)
const tasks = (<Icon name="star" size={25} />)


export default class NavBar extends React.Component{
    constructor () {
        super()
        this.state = {
            selectedIndex: 1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    
    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }

    render(){
        const buttons = [  home , tasks]
        const _buttons = ['', '']
        const { selectedIndex } = this.state
        
        return(
            <View style={styles.nav}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    textStyle={styles.primaryBtnText}
                    selectedTextStyle={styles.primarySelectedBtnText}
                    containerStyle={styles.primaryContainer}
                    buttonStyle={styles.primaryBtn}
                />
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={_buttons}
                    containerStyle={styles._container}
                    selectedButtonStyle= {styles._selectedButton}
                    buttonStyle={styles._button}
                />
            </View>
        )
    }
}

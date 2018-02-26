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
            <View style={styles.container}>
                <View style={styles.nav}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        textStyle={{ color: 'white', fontSize: 20, fontWeight: "bold"}}
                        selectedTextStyle={{fontSize: 20, fontWeight: "bold", color: 'white'}}
                        containerStyle={{backgroundColor: '#b3d9ff', height: 60 ,width: 120, borderWidth: 0, marginTop: 0, marginBottom: 0, marginLeft: 15, marginRight: 0}}
                        // selectedButtonStyle= {{backgroundColor: '#cce6ff'}}
                        buttonStyle={{backgroundColor: '#b3d9ff', marginLeft: -1, marginRight: -1 }}
                    />
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={_buttons}
                        containerStyle={{height: 2 ,width: 120, marginLeft: 15, borderWidth: 0, marginTop: 0, marginBottom: 0, marginLeft: 15, marginRight: 0}}
                        selectedButtonStyle= {{backgroundColor: '#f2ffe6'}}
                        buttonStyle={{backgroundColor: '#b3d9ff', marginLeft: -1, marginRight: -1 }}
                    />
                </View>
            </View>
        )
    }
}

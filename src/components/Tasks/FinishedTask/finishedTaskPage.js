import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './finishedTaskPage.style';


export default finishedTaskPage = (props) => {
    const {toggleFinishedTaskPage} = props;

    return (
        <View style={styles.container} >
            <Image
                style={{width: 250, height: 240}}
                source={{uri:
                     'https://st2.depositphotos.com/4966263/7336/v/950/depositphotos_73364241-stock-illustration-you-are-amazing-hand-drawn.jpg'
                }}
            />
            <Button textStyle={styles.textStyle}
                    buttonStyle={styles.buttonStyle}
                    title='Submit' 
                    onPress={() => toggleFinishedTaskPage()}
            />
        </View>
    )
}
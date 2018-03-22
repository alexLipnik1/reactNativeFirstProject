import {View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './homePage.style';

export default class HomePage extends React.Component{


    render(){
        const header = 'Wellcom';
        const subHeader = 'to the best day of your life !!!';
        const first = 'We overesimate how much we can do in one day, and underestimate how much we can do in several days!';
        

        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.mainHeader}>{header}</Text>
                    <Text style={styles.subHeader}>{subHeader}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.firstText}>{first}</Text>
                </View>
                <View style={{backgroundColor:'black', height: 10, width: '100%'}}>

                </View>
                <Image
                    style={{width: 340, height: 240, marginTop: 30}}
                    // source={{uri: 'http://www.claraapollo.com/wp-content/uploads/2017/01/images.duckduckgo-3.jpg'}}
                />
            </View>
        )
    }
}

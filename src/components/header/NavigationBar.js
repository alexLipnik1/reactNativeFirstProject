import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../../styles/headerStyles/NavigationBar.style';


export default class NavBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.nav}>
                    <TouchableOpacity >
                        <View style = {styles.btn}>
                            <Text style = {styles.txt}>Add Tesk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style = {styles.btn}>
                            <Text style = {styles.txt}>Sort</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style = {styles.btn}>
                            <Text style = {styles.txt}>Finished</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2

import styles from '../task.styles';
const _icon = 'ios-checkmark-circle-outline';    


export default taskActive = (props) => {
    const {handleOverlayPress} = props;
    
    return (
    <View style={styles.ActiveOptionsContainer}>
        <View style={styles.notification}>

        </View>
        <View style={styles.importance}>

        </View>
        <TouchableOpacity 
            style={styles.activeButton}
            onPress={() => handleOverlayPress()}
        >
            <Text style={{fontWeight: '400', marginRight: 10, fontSize: 15}}>Finished</Text>
            <Ionicons name={_icon} size={30} color='#000' />
            
        </TouchableOpacity>
    </View>
)}
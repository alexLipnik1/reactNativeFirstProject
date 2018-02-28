import React from 'react';
import { View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import styles from './overlay.Style';

export default Overlay = (props) => {
    
    const {toggleOverlay} = props;

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Add Task</Text>

            <Button textStyle={styles.textStyle}
                    buttonStyle={styles.buttonStyle}
                    title='Close Window' onPress={toggleOverlay}
            />
        </View>
    )
}
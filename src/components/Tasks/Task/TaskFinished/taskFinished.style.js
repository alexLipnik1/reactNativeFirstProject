import { StyleSheet } from 'react-native';

const mainColor = '#ccffe6';
const mainColor1 = 'black';

export default styles = StyleSheet.create({
    container: {
        padding: 5, 
        flexDirection: 'row',
    },
    taskBody: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: mainColor,
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    indicatorBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        borderRadius: 50,        
        height: 45,
        width: 45,
        backgroundColor: '#99ffbb',
    },

  });

import { StyleSheet } from 'react-native';

const mainColor = '#e6f0ff';
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
        height: 35,
        width: 35,
        backgroundColor: '#FA8072',
    },
    importance_1:{
        borderRadius: 50,        
        height: 35,
        width: 35,
        backgroundColor: '#75a3a3',
    },
    importance_2:{
        borderRadius: 50,        
        height: 35,
        width: 35,
        backgroundColor: '#F0E68C',
    },
    importance_3:{
        borderRadius: 50,        
        height: 35,
        width: 35,
        backgroundColor: '#ff4d4d',
    },

  });

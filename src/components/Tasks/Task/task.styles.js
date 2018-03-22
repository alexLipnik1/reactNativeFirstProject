import { StyleSheet } from 'react-native';

const mainColor = '#e6f0ff';
const mainColor1 = 'black';

export default styles = StyleSheet.create({
    container: {
        padding: 5, 
        flexDirection: 'row',
    },


    //  ========================== Regular ==========================


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
        backgroundColor: '#f2f2f2',
    },


    //  ========================== Active ==========================

    ActiveOptionsContainer:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskBodyActive: {
        height: 145,
        backgroundColor: mainColor,
        flex: 6,
    },  
    textContainer: {
        backgroundColor: '#85e0e0',
        alignItems: 'center',
    },
    textActive: {
        backgroundColor: 'transparent',
        fontSize: 20,
        padding: 15,
        fontWeight: 'bold',
    },

    
    notification: {
        margin: 10,
        flex: 1,
        backgroundColor: 'white',
    },
    importance: {
        width: 65,
        height: 65,
        margin: 10,
        marginRight: 0,
        backgroundColor: 'white',
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
    activeButton: {
        borderBottomWidth: 1.5, 
        borderRightWidth: 0.5, 
        borderColor: '#cccccc', 
        width: 280,
        margin: 10,
        height: 66,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#98e698',
    }      

  });

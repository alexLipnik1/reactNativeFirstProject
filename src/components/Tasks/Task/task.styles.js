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
    },
    taskBodyActive: {
        height: 115,
        backgroundColor: mainColor,
        flex: 6,
        justifyContent: 'center',
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
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
    },
    activeButton: {
        margin: 6,
        borderBottomWidth: 1.5, 
        borderRightWidth: 0.5, 
        borderColor: '#cccccc', 
        width: 115,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#98e698',
    }      

  });

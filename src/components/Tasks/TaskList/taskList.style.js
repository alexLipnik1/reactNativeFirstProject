import { StyleSheet } from 'react-native';

const mainColor = '#e6f0ff';
const mainColor1 = 'black';

export default styles = StyleSheet.create({
    container: {
        padding: 5, 
        // borderBottomWidth: 1,
        flexDirection: 'row',
    },
    taskBody: {
        height: 55,
        flexDirection: 'row',
        marginRight: 5,
        backgroundColor: mainColor,
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskBodyActive: {
        height: 105,
        flexDirection: 'row',
        marginRight: 5,
        backgroundColor: '#ccfff2',
        flex: 6,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    triangle1: {
        marginTop: 80,
        borderTopWidth: 18,
        borderRightWidth: 18,
        borderLeftWidth: 18,
        borderBottomWidth: 18,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: mainColor1,
        borderBottomColor: mainColor1,       
        height: 35,
        width: 35,
        zIndex: 99,
    },
    triangle2: {
        zIndex: 99,
        position: 'absolute',
        borderTopWidth: 30,
        borderRightWidth: 30,
        borderLeftWidth: 30,
        borderBottomWidth: 30,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'white',
        borderBottomColor: 'white',        
        height: 60,
        width: 60,
    },
    taxt: {
        // marginRight: 80,
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
  });

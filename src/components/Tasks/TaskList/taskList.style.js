import { StyleSheet } from 'react-native';

const mainColor = '#e6f0ff';
const mainColor1 = '#e6f0ff';

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
        justifyContent: 'space-between',
    },
    triangle1: {
        
        borderTopWidth: 28,
        borderRightWidth: 28,
        borderLeftWidth: 28,
        borderBottomWidth: 28,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: mainColor1,
        borderBottomColor: mainColor1,       
        height: 55,
        width: 55,
        zIndex: 99,
    },
    triangle2: {
        zIndex: 99,
        position: 'absolute',
        borderTopWidth: 35,
        borderRightWidth: 35,
        borderLeftWidth: 35,
        borderBottomWidth: 35,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'white',
        borderBottomColor: 'white',        
        height: 65,
        width: 65,
    },
    taxt: {
        marginRight: 80,
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

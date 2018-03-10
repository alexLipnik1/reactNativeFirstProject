import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header:{
        fontSize: 35,
        fontWeight: 'bold',
    },

    buttonStyle: {
        width: 150,
        height: 35,
        borderRadius: 10,
        backgroundColor: '#00001a',
        marginBottom: 15,
    },
    textStyle: {
        color: 'white',//'#66ff66',
        fontSize: 16,
    },
    settingsContainer: {
        width: 250,
        height: 140,
        // borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 60,
    },
    settingHeader: {
        padding: 20,
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
    },
    importance: {
        margin: 50,
        width: 220,
        height: 75,
        flexDirection: 'row',
    },


    importance_1:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#00e64d',        
        borderWidth: 1,
    },
    importance_1_active:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#33ff33',
        borderWidth: 2,
        borderColor: '#004d00',
    },

    importance_2:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#ffff66',
        borderWidth: 1,
    },
    importance_2_active:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#ffff00',
        borderWidth: 2,
    },

    importance_3:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#ff5c33',
        borderWidth: 1,
    },
    importance_3_active:{
        height: 65,
        width: 65,
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#e60000',
        borderWidth: 2,
    },

  });

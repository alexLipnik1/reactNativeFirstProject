import { StyleSheet } from 'react-native';


const navColor = '#3399ff';
const underlineColor = '#f2ffe6';



export default styles = StyleSheet.create({
    nav:{
        marginRight: 5,
        marginBottom: 0,
        marginLeft: 0,
        padding: 0,
        backgroundColor: navColor,
        width: 370,
    },



    primaryBtnText:{
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
        
    },
    primarySelectedBtnText:{
        fontSize: 20,
        fontWeight: "bold",
        color: 'white'
    },
    primaryContainer:{
        backgroundColor: navColor,
        height: 60,
        width: 120,
        borderWidth: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 0,
    },
    primaryBtn:{
        backgroundColor: navColor,
        marginLeft: -1,
        marginRight: -1
    },

    _container:{
        height: 2,
        width: 120,
        marginLeft: 15,
        borderWidth: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 0,
    },
    _selectedButton: {
        backgroundColor: underlineColor
    },
    _button:{
        backgroundColor: navColor,
        marginLeft: -1,
        marginRight: -1, 
    }


  });

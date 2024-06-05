import { StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

// Employment
const emplotStyles = StyleSheet.create({
    public : {
        marginTop : 20,
        fontSize : 18,
        textAlign: 'left',
        color: _Colors._Black,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    visual: {
        flex: 1,
        height: 150,
        margin: 20,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '80%',
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});

//EmployTab

export default emplotStyles
import { StyleSheet, Dimensions } from 'react-native';
import { _Colors } from '../../styles/colors';

// Employment
const emplotStyles = StyleSheet.create({
    container: {
        marginTop : 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    public : {
        fontSize : 18,
        marginRight : 65,
        color: _Colors._Black,
        fontWeight: 'bold'
    },
    visual: {
        height : 180,
        margin: 10,
        marginBottom : 30
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

// EmployCard normal
const employCardNormal = StyleSheet.create({
    normalContainer: {
      flex: 1,
    },
    normalCard: {
      margin: 10,
      padding: 20,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    normalCardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    normalCardContent: {
      fontSize: 14,
    },
  });

  // EmployCard recommend
  const employCardRecommend = StyleSheet.create({
    recommendContainer: {
        flex: 1
    },
    recommendCard: {
        margin: 10,
      padding: 20,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    recommendCardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    recommendCardContent: {
      fontSize: 14,
    },
  });

  export { emplotStyles , employCardNormal, employCardRecommend }
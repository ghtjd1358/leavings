// Employment.tsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/favicon.png'; 

import { _Colors } from '../../styles/colors'; 

const Employment: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput style={styles.input} placeholder="Enter text" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>더보기</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop : 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: _Colors.background,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        height: 40,
        // borderColor: _Colors.border, 
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '80%',
    },
    button: {
        // backgroundColor: _Colors.primary, 
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Employment;

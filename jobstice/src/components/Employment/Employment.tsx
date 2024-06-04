//Employment.tsx
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import logo from '../../../assets/favicon.png'; 
import { _Colors } from '../../styles/colors'; 

const API_KEY = 'nb9RnTuds2FGu1Og6F5FtuVCuOUgaK3tZc4b2whNemzmlM2mffN6';
const url = ` http://localhost:3000/job-search?access-key=${API_KEY}`; 


const Employment: React.FC = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(url, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setJobs(data);
                console.log('data', data);
                console.log('dataJobs', data.jobs);
            } catch (error) {
                console.error("API로부터 데이터를 불러오는데 실패했습니다.", error.message);
            }
        };
        fetchJobs();
    }, []);
    

    return (
        <View style={styles.container}>
            <Text style={styles.public}>지금 뜨는 채용 공고 확인해보세요!</Text>
            <Image source={logo} style={styles.logo} />
            <TextInput style={styles.input} placeholder="Enter text" />
            {jobs.map((job, index) => (
                <View key={index}>
                    <Text>{job}</Text>
                </View>
            ))}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>더보기</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    public : {
        margin : 30 ,
        fontSize : 25,
        textAlign : 'left',
        color: 'black',
        fontWeight: 'bold'
    },
    container: {
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
        fontWeight: 'bold',
    },
});

export default Employment;

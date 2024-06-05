import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import visual from '../../../assets/employvisual.jpg'; 
import emplotStyles from './EmploymentStyle'; 


const API_KEY = 'nb9RnTuds2FGu1Og6F5FtuVCuOUgaK3tZc4b2whNemzmlM2mffN6';
const url = `http://localhost:3000/job-search?access-key=${API_KEY}`; 

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
                setJobs(data.jobs);
                console.log('data', data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchJobs();
    }, []);
    
    return (
        <View style={emplotStyles.container}>
            <Text style={emplotStyles.public}>지금 뜨는 채용 공고 확인해보세요!</Text>
            <Image source={visual} style={emplotStyles.visual} />
            {/* <TextInput style={emplotStyles
                .input} placeholder="Enter text" /> */}
            {/* {jobs.map((job, index) => (
                <View key={index}>
                    <Text>{job}</Text>
                </View>
            ))} */}
            {/* <TouchableOpacity style={emplotStyles.button}>
                <Text style={emplotStyles.buttonText}>더보기</Text>
            </TouchableOpacity> */}
            <StatusBar style="auto" />
        </View>
    );
}

export default Employment;

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import visual from '../../../assets/employvisual.jpg'; 
import {emplotStyles} from './EmploymentStyle'; 

const Employment: React.FC = () => {
    
    return (
        <View style={emplotStyles.container}>
            <Text style={emplotStyles.public}>지금 뜨는 채용 공고 확인해보세요! 🔥 </Text>
            <Image source={visual} style={emplotStyles.visual} />
            <StatusBar style="auto" />
        </View>
    );
}

export default Employment;

import { View, Text, StyleSheet } from 'react-native';
import Employment from '../components/Employment/Employment';
// import EmployTab from '../components/Employment/EmployTab';

export default function EmploymentPage() {
  return (
    <View>
        {/* <EmployTab/> */}
        <Employment/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  title: {
      fontSize: 24,
      marginBottom: 20,
  },
});

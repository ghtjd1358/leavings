import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Text>Hello, </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

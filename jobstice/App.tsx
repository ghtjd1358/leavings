import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginPage from './src/pages/LoginPage';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginPage></LoginPage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default App;

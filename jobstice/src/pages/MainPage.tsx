import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { _Colors } from '../styles/colors';
import Header from '../components/Header/Header';
import MainPageContentTop from '../components/MainPageContent/MainPageContentTop';
import MainPageContentMiddle from '../components/MainPageContent/MainPageContentMiddle';
import MainPageContentBottom from '../components/MainPageContent/MainPageContentBottom';

function MainPage({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header navigation={navigation} />
        <View style={styles.topLayOut}>
          <MainPageContentTop />
        </View>
        <ScrollView
          style={styles.middleLayOut}
          showsVerticalScrollIndicator={true}
          indicatorStyle="black"
        >
          <MainPageContentMiddle />
          <MainPageContentBottom />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: _Colors._PrimaryBlue,
  },
  topLayOut: {
    paddingHorizontal: 20,
  },
  middleLayOut: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // paddingHorizontal: 10,
    paddingTop: 25,
  },
});

export default MainPage;

import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import EmploymentPage from '../../pages/EmploymentPage';
// import EmploymentPage2 from '../../pages/EmploymentPage2';


const EmploymentPage = () => (
  <View>
    <Text>국내 관련 글들이 여기에 표시됩니다.</Text>
  </View>
);

const EmploymentPage2 = () => (
  <View>
    <Text>해외 관련 글들이 여기에 표시됩니다.</Text>
  </View>
);

const EmployTab = () => {
  const [selectedTab, setSelectedTab] = useState('korean');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('korean')}>
          <Text>국내</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setSelectedTab('foreign')}>
          <Text>해외</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {selectedTab === 'korean' ? <EmploymentPage /> : <EmploymentPage2 />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  tabButton: {
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default EmployTab;

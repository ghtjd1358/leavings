import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Employment from '../components/Employment/Employment';
import EmployTab from '../components/Employment/EmployTab';
import DomesticEmployment from '../components/Employment/DomesticEmployment';
import OverseasEmployment from '../components/Employment/OverseasEmployment ';

const EmploymentPage = () => {
  const [selectedTab, setSelectedTab] = useState('domestic');

  return (
    <>
      <Employment></Employment>
      <EmployTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <View style={styles.container}>
        {selectedTab === 'domestic' && <DomesticEmployment />}
        {selectedTab === 'overseas' && <OverseasEmployment />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EmploymentPage;

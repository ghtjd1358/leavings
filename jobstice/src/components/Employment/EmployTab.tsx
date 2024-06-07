import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { _Colors } from '../../styles/colors';

const EmployTab = ({ selectedTab, setSelectedTab } : any) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => setSelectedTab('domestic')}
        style={[
          styles.button,
          selectedTab === 'domestic' ? styles.selected : styles.notSelected,
        ]}
      >
        <Text style={[
          styles.buttonText, 
          selectedTab === 'domestic' ? styles.selectedText : styles.notSelectedText
        ]}>국내</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setSelectedTab('overseas')}
        style={[
          styles.button,
          selectedTab === 'overseas' ? styles.selected : styles.notSelected,
        ]}
      >
        <Text style={[
          styles.buttonText, 
          selectedTab === 'overseas' ? styles.selectedText : styles.notSelectedText
        ]}>해외</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    width: 175,
    height: 50,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: _Colors._PrimaryBlue,
  },
  notSelected: {
    backgroundColor: _Colors._Gray_3,
  },
  selectedText: {
    color: _Colors._white,
  },
  notSelectedText: {
    color: _Colors._Black,
  }
});

export default EmployTab;

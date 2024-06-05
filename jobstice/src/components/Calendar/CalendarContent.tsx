import React, { useState } from 'react';
import CalendarModal from './CalendarModal';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import { styles } from './CalendarContent.style';

const CalendarContent = ({ date }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dateText}>{date}</Text>
        {date && (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CalendarModal />
            <Button title="등록하기" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarContent;

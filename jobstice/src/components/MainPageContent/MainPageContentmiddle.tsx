import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './MainPageContentMiddle.style';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

function MainPageContentMiddle() {
  // 테스트용
  const date = [2, 3, 4, 5, 6, 7, 8];
  const test = [1, 2, 3];

  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>5월 4주차 계획</Text>
      <View style={Styles.calendarContainer}>
        {date.map((day, index) => (
          <Text key={index} style={Styles.dayText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={Styles.todoContainer}>
        {test.map((day, index) => (
          <View style={Styles.todoContent}>
            <View style={Styles.innerContainer}>
              <View>
                <TouchableOpacity>
                  <Text style={Styles.content}>도서관 가기</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <FontAwesome5 name="check-circle" style={Styles.checkBtn} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default MainPageContentMiddle;

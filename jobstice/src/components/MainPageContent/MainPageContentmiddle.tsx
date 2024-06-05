import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './MainPageContentMiddle.style';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

function MainPageContentMiddle() {
  // 테스트용
  const date = [2, 3, 4, 5, 6, 7, 8];
  const test = [1, 2, 3];

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>5월 4주차 계획</Text>
        <TouchableOpacity style={Styles.headerArrow}>
          <Text style={Styles.arrowText}>더보기</Text>
          <Entypo name="chevron-right" style={Styles.arrowText} />
        </TouchableOpacity>
      </View>
      <View style={Styles.calendarContainer}>
        {date.map((day, index) => (
          <Text key={index} style={Styles.dayText}>
            {day}
          </Text>
        ))}
      </View>
      <View style={Styles.todoContainer}>
        {test.map((test, index) => (
          <View style={Styles.todoContent} key={index}>
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

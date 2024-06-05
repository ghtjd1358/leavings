import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Styles from './MainPageContentBottom.style';
import Entypo from '@expo/vector-icons/Entypo';

import logo from '../../../assets/favicon.png';
function MainPageContentBottom() {
  const test = [1, 2, 3, 4, 5];
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>인기 게시글 🔥</Text>
        <TouchableOpacity style={Styles.headerArrow}>
          <Text style={Styles.arrowText}>더보기</Text>
          <Entypo name="chevron-right" style={Styles.arrowText} />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator
          indicatorStyle="black"
          style={Styles.scrollContainer}
        >
          {test.map((test, index) => (
            <View style={Styles.contentContainer} key={index}>
              <View>
                <Image source={logo} style={Styles.logo}></Image>
              </View>
              <View style={Styles.contentBox}>
                <Text style={Styles.title}>제목</Text>
                <Text>내용</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default MainPageContentBottom;

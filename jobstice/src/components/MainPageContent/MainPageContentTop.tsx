import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Styles from '../MainPageContent/MainPageContentTop.style';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';

function MainPageContentTop() {
  const [check, setCheck] = useState(false);
  return (
    <View style={Styles.container}>
      <View>
        <ScrollView
          horizontal
          //   pagingEnabled
          showsHorizontalScrollIndicator={true}
          indicatorStyle="black"
          style={Styles.scrollContainer}
        >
          <View style={Styles.innerContainer}>
            <View>
              <TouchableOpacity>
                <Text style={Styles.content}>도서관 가기</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setCheck(!check);
                }}
              >
                <FontAwesome5
                  name="check-circle"
                  style={check ? Styles.checkBtnActive : Styles.checkBtn}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default MainPageContentTop;

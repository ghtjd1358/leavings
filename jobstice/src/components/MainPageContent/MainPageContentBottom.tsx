import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Styles from './MainPageContentBottom.style';

function MainPageContentBottom() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>인기 게시글 🔥</Text>
    </View>
  );
}

export default MainPageContentBottom;

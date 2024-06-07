import { View, Text, ScrollView } from 'react-native';
import {employCardNormal, employCardRecommend} from './EmploymentStyle'

const DomesticEmployment = () => {
  return (
    <>
  <ScrollView 
    showsHorizontalScrollIndicator = {false}
    style={employCardNormal.normalContainer}>
    {/* 추천 */}
    <ScrollView 
      pagingEnabled
      horizontal
      contentContainerStyle={{ alignItems: 'center' }}
      showsHorizontalScrollIndicator = {false}
      style={employCardRecommend.recommendContainer}>
      <View style={employCardRecommend.recommendCard}>
        <Text style={employCardRecommend.recommendCardTitle}>카드 제목</Text>
        <Text style={employCardRecommend.recommendCardContent}>카드 내용입니 다. 여기에 필요한 정보를 채워 넣으세요.
        </Text>
      </View>
    </ScrollView>

    {/* 일반 */}
      <View style={employCardNormal.normalCard}>
        <Text style={employCardNormal.normalCardTitle}>카드 제목</Text>
        <Text style={employCardNormal.normalCardContent}>카드 내용입니다. 여기에 필요한 정보를 채워 넣으세요.</Text>
      </View>

      <View style={employCardNormal.normalCard}>
        <Text style={employCardNormal.normalCardTitle}>카드 제목</Text>
        <Text style={employCardNormal.normalCardContent}>카드 내용입니다. 여기에 필요한 정보를 채워 넣으세요.</Text>
      </View>
    </ScrollView>
    </>    
  );
};

export default DomesticEmployment;

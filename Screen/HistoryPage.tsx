import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import HistoryButton from '../Component/HistoryButton'
import RNFadedScrollView from 'rn-faded-scrollview'
import History_Widget from '../Component/History_Widget'
import input from '../TestInput.json'

interface FoodDetail {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  googleLink: string;
  imageURL: string;
  date: string;
}

const HistoryPage = ({navigation}: {navigation: any}) => {
  const selectHistory = (data: FoodDetail) => {
    navigation.navigate('DetailPage', {data : data})
  }
  const onPressBackToHome = () => {
    navigation.navigate('SelectFoodTypePage')
  }

  return (
    <View style={Styles.Background2_Layer1_Box}>
      <View style={Styles.Background2_Layer2_Box}>
        <View style={Styles.Background2_Layer3_Box}>
          <View style={Styles.Com_Content_Background_Box}>
              <View style={Styles.Com_Background_Button}>
                  <View style={{marginTop: '-2%', height: '100%'}}>
                      <Text style={Styles.Com_Background_Button_Text}>HISTORY</Text>
                      <View style={Styles.Com_ScrollView_Style_Box_History}>
                          <RNFadedScrollView allowStartFade={true} allowEndFade={true} fadeColors={['rgba(229, 229, 229, 0)', 'rgba(31, 28, 24, 1)']} fadeSize={50} showsVerticalScrollIndicator={false} style={Styles.Com_ScrollView_Style} >
                              {input.map(d => (
                                <View style={Styles.History_Widget_Box} key={d.id}>
                                  <TouchableOpacity onPress={() => selectHistory(d)}>
                                    <History_Widget name={d.name} date={d.date} imageURL={d.imageURL} />
                                  </TouchableOpacity>
                                </View>
                              ))}
                          </RNFadedScrollView>
                      </View>
                      <TouchableOpacity onPress={() => onPressBackToHome()} style={Styles.Com_YellowButton_DetailPage_Box}>
                          <HistoryButton text='BACK TO HOME' />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HistoryPage
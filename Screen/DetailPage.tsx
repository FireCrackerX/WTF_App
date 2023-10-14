import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import RNFadedScrollView from 'rn-faded-scrollview'
import TextFoodDetail from '../Component/TextFoodDetail'
import YellowBlackButton from '../Component/YellowBlackButton'
import HistoryButton from '../Component/HistoryButton'

const DetailPage = ({navigation, route}: {navigation:any, route:any}) => {
  // console.log(route)
  const onPressBackToHome = () => {
    navigation.navigate('SelectFoodTypePage')
  }

  const onPressMoreDetail = () => {
    Linking.openURL(route.params.data.googleLink)
  }

  return (
    <View style={Styles.Background2_Layer1_Box}>
      <View style={Styles.Background2_Layer2_Box}>
        <View style={Styles.Background2_Layer3_Box}>
          <View style={Styles.Com_Content_Background_Box}>
            <View style={Styles.Com_Background_Button}>
                <View style={{marginTop: '-2%', height: '100%'}}>
                    <Text style={Styles.Com_Background_Button_Text}>{route.params.data.name}</Text>
                    <View style={Styles.Com_ScrollView_Style_Box_Detail}>
                        <RNFadedScrollView allowStartFade={true} allowEndFade={true} fadeColors={['rgba(229, 229, 229, 0)', 'rgba(31, 28, 24, 1)']} fadeSize={50} showsVerticalScrollIndicator={false} style={Styles.Com_ScrollView_Style} >
                            <TextFoodDetail imageURL={route.params.data.imageURL} desricption={route.params.data.description} ingredient={route.params.data.ingredients} />
                        </RNFadedScrollView>
                    </View>
                    <TouchableOpacity onPress={() => onPressMoreDetail()} style={Styles.Com_YellowBlack_DetailPage_Box}>
                        <YellowBlackButton text='MORE DETAILS'/>
                    </TouchableOpacity>
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

export default DetailPage
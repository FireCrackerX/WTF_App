import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import HistoryButton from '../Component/HistoryButton'

const NoImagePage = ({navigation}) => {
    const onPressBackToHome = () => {
        navigation.navigate('SelectFoodTypePage')
    }
    return (
        <View style={Styles.Background2_Layer1_Box}>
          <View style={Styles.Background2_Layer2_Box}>
            <View style={Styles.Background2_Layer3_Box}>
              <View style={Styles.Com_Content_Background_Box}>
                <View style={Styles.Com_Background_Button}>
                    <View style={Styles.Error_Detail_Box}>
                        <Text style={Styles.Error_Detail_Text_Desciption}>Sorry, this menu was not found in the database.</Text>
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

export default NoImagePage
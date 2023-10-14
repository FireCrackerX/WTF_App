import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import NavigateButton from '../Component/NavigateButton'
import HistoryButton from '../Component/HistoryButton'

const SelectFoodTypePage = ({navigation}: {navigation: any}) => {
  const onSelectType = (type: string) => {
    navigation.navigate('SelectPicturePage', {type: type})
  }

  const onPressHistoryButton = () => {
    navigation.navigate('HistoryPage')
  }

  return (
    <View style={Styles.Background_Color}>
      <View style={Styles.Background_Layer1_Box}>
        <View style={Styles.Background_Text_Layer1}>
            <Text style={Styles.Background_Text_First}>W</Text>
            <Text style={Styles.Background_Text}>HAT</Text>
        </View>
        <View style={Styles.Background_Layer2_Box} >
            <View style={Styles.Background_Text_Layer2}>
                <Text style={Styles.Background_Text_First}>T</Text>
                <Text style={Styles.Background_Text}>HAI</Text>
            </View>
            <View style={Styles.Background_Layer3_Box}>
                <View>
                  <View  style={Styles.Background_Text_Layer3}>
                    <Text style={Styles.Background_Text_First}>F</Text>
                    <Text style={Styles.Background_Text}>OOD</Text>
                  </View>
                  <View style={Styles.Com_Background_Button_Box}>
                    <View style={Styles.Com_Background_Button}>
                      <Text style={Styles.Com_Background_Button_Text}>SELECT FOOD TYPE</Text>
                      <Text style={Styles.Com_Background_Button_Detail_Text}></Text>
                      <TouchableOpacity onPress={() => onSelectType('Dessert')}>
                        <NavigateButton text='DESSERT' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => onSelectType('Curry and Soup')}>
                        <NavigateButton text='CURRY AND SOUP' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => onSelectType('Other')}>
                        <NavigateButton text='DISH AND APPETIZER' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => onPressHistoryButton()} style={Styles.Com_History_Button_Box}>
                        <HistoryButton text='HISTORY'/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default SelectFoodTypePage
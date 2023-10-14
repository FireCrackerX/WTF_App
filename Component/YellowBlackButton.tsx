import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'

interface Detail {
    text: string;
}

const YellowBlackButton = (props: Detail) => {
  return (
    <View>
      <View style={Styles.Com_YellowBlack_Button}>
        <Text style={Styles.Com_History_Button_Text}>{props.text}</Text>
      </View>        
    </View>
  )
}

export default YellowBlackButton
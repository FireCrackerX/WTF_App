import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'

interface Detail {
    text: string;
}

const NextButton = (props: Detail) => {
  return (
    <View style={Styles.Com_Next_Button_Box}>
      <TouchableOpacity>
        <View style={Styles.Com_Next_Button}>
            <Text style={Styles.Com_History_Button_Text}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NextButton
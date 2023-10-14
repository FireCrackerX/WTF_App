import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles';

interface Detail {
    text: string;
}

const BackButton = (props: Detail) => {
  return (
    <View>
      <View style={Styles.Com_Back_Button}>
          <Text style={Styles.Com_History_Button_Text}>{props.text}</Text>
      </View>
    </View>
  )
}

export default BackButton
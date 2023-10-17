import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../Styles'

interface Detail {
    percent: string
}

const PercentWidget = (props: Detail) => {
  return (
    <View style={Styles.Percent_Widget}>
      <Text style={Styles.Percent_Widget_Text}>{props.percent}</Text>
    </View>
  )
}

export default PercentWidget
import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import PercentWidget from './PercentWidget'

interface WidgetDetail {
    imageURL : string;
    name : string;
    percent: string;
}

const FoodSelectWidget = (props: WidgetDetail) => {
  return (
    <View style={Styles.Food_Select_Widget_Style}>
      <View style={Styles.Food_Select_Widget_Detail_Box}>
        <View style={Styles.Percent_Widget_Box}>
          <PercentWidget percent={props.percent} />
        </View>
        <View style={Styles.Food_Select_Widget_Image_Box}>
          <Image source={{uri: props.imageURL}} style={Styles.Food_Select_Image}/>
        </View>
      </View>
      <View style={Styles.Food_Select_Widget_Text_Box}>
        <Text numberOfLines={1} style={Styles.Food_Select_Text}>{props.name}</Text>
      </View>
    </View>
  )
}

export default FoodSelectWidget
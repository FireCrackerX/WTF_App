import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles';

interface TestDetail {
  imageURL: string;
  imageType: string;
  name: string;
  date: string;
}

const History_Widget = (props: TestDetail) => {
  let image_Style = Styles.History_Picture
  if(props.imageType === 'Camera') {
    image_Style = Styles.History_Picture_Camera
  }

  return (
    <View style={Styles.History_Widget_Styles}>
      <View style={Styles.History_Widget_Image}>
        <Image source={{uri: props.imageURL}} style={image_Style}/>  
      </View>
      <View style={Styles.History_Widget_Food_Name_Box}>
        <Text numberOfLines={1} style={Styles.History_Widget_Food_Name}>{props.name}</Text>
      </View>
      <View style={Styles.History_Widget_Date_Box}>
        <Text style={Styles.History_Widget_Date}>{props.date}</Text>
      </View>
    </View>
  )
}

export default History_Widget
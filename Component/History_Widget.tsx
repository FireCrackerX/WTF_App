import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles';

interface FoodDetail {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    googleLink: string;
    imageURL: string;
    date: string
}

interface TestDetail {
  imageURL: string;
  name: string;
  date: string;
}

const History_Widget = (props: TestDetail) => {
  return (
    <View style={Styles.History_Widget_Styles}>
      <View style={Styles.History_Widget_Image}>
        <Image source={{uri: props.imageURL}} style={Styles.History_Picture}/>  
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
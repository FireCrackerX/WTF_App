import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles'

interface TextDetail {
    imageURL: string;
    desricption: string;
    ingredient: string;
}

const TextFoodDetail = (props: TextDetail) => {
  return (
    <View>
      <View style={Styles.Com_Food_Picture_Box}>
          <Image source={{uri: props.imageURL}} style={Styles.Food_Picture}/>  
      </View>
      <Text style={Styles.Food_Detail_Text_Header}>Food description</Text>
      <Text style={Styles.Food_Detail_Text_Desciption}>{props.desricption}</Text>
      <Text style={Styles.Food_Detail_Text_Header}>Important ingredients</Text>
      <Text style={Styles.Food_Detail_Text_Desciption}>{props.ingredient}</Text>
    </View>
  )
}

export default TextFoodDetail
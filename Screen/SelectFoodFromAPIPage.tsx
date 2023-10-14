import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import FoodSelectWidget from '../Component/FoodSelectWidget'
import input from '../TestInput.json'

interface FoodDetail {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  googleLink: string;
  imageURL: string;
  date: string;
}

const SelectFoodFromAPIPage = ({navigation}: {navigation: any}) => {
  const selectFood = (data: FoodDetail) => {
    // console.log(data)
    navigation.navigate('DetailPage', {data : data})
  }

  return (
    <View style={Styles.Background2_Layer1_Box}>
      <View style={Styles.Background2_Layer2_Box}>
        <View style={Styles.Background2_Layer3_Box}>
            <View style={Styles.Com_Content_Background_Box}>
                <View style={Styles.Com_Background_Button}>
                    {input.map(d => (
                    <View style={Styles.Food_Select_Widget_Box} key={d.id}>
                        <TouchableOpacity onPress={() => selectFood(d)}>
                            <FoodSelectWidget imageURL={d.imageURL} name={d.name} />
                        </TouchableOpacity>
                    </View>
                    ))}
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default SelectFoodFromAPIPage
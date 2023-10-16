import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles';
import input from '../TestInput.json'

interface Detail {
    backText: string;
    nextText: string;
    type: string;
    imageURL: string;
    imageType: string;
    navigation : any;
}

const BothButton = (props: Detail) => {
  const onPressBack = () => {
    props.navigation.navigate('SelectPicturePage', {type: props.type})
  }

  const onPressConfirm = () => {
    // API here
    props.navigation.navigate('SelectFoodFromAPIPage', {imageURL: props.imageURL, inputData: input, inputType: 'API', imageType: props.imageType})
  }

  return (
    <View style={Styles.Com_Both_Button_Box}>
      <TouchableOpacity onPress={onPressBack} style={{width: '48%', height: '100%', marginRight: '4%'}}>
        <View style={Styles.Com_Back_Button}>
            <Text style={Styles.Com_History_Button_Text}>{props.backText}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressConfirm} style={{width: '48%', height: '100%'}}>
        <View style={Styles.Com_Next_Button}>
            <Text style={Styles.Com_History_Button_Text}>{props.nextText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BothButton
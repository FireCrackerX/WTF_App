import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Styles from '../Styles';
import rs from 'react-native-fs'
import axios from 'axios';
// import RNFetchBlob from 'react-native-fetch-blob';
// import input from '../TestInput.json'

interface Detail {
    backText: string;
    nextText: string;
    type: string;
    imageURL: string;
    imageType: string;
    navigation : any;
}

const BothButton = (props: Detail) => {
  let input
  const onPressBack = () => {
    props.navigation.navigate('SelectPicturePage', {type: props.type})
  }

  const fetchAPI = async () => {
    let imageToPass

    await rs.readFile(props.imageURL, 'base64')
    .then(image => {
      imageToPass = image
    })
    .catch(error => {
      console.error('Read image error: ', error);
    })

    // console.log(imageToPass)
    const formdata = new FormData()

    formdata.append('image', imageToPass)
    formdata.append('image_type', props.type)

    await fetch('http://0.0.0.0:5000/predict',{
      method: 'POST',
      body: formdata,
      headers : {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => response.json())
      .then(data => {
        input = data
        console.log('Response:', input);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  fetchAPI()

  const onPressConfirm = async () => {
    if(input.length < 1){
      props.navigation.navigate('NoImagePage')
    }
    else {
      props.navigation.navigate('SelectFoodFromAPIPage', {imageURL: props.imageURL, inputData: input, inputType: 'API', imageType: props.imageType})
    }
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
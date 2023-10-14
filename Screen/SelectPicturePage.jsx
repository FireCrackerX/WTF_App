import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import NavigateButton from '../Component/NavigateButton'
import BackButton from '../Component/BackButton'
import { launchImageLibrary } from 'react-native-image-picker'

const SelectPicturePage = ({navigation, route}) => {
  // console.log(route.params.type)
  
  const onSelectCamera = () => {
    navigation.navigate('CameraPage', {type: route.params.type})
  }

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        console.log(imageUri)
        navigation.navigate('ConfirmPicturePage', {imageURL: imageUri, imageType: 'Image', type: route.params.type})
      }
    });
  };

  const onPressBack = () => {
    navigation.navigate('SelectFoodTypePage')
  }

  return (
    <View style={Styles.Background_Color}>
      <View style={Styles.Background_Layer1_Box}>
        <View style={Styles.Background_Text_Layer1}>
            <Text style={Styles.Background_Text_First}>W</Text>
            <Text style={Styles.Background_Text}>HAT</Text>
        </View>
        <View style={Styles.Background_Layer2_Box} >
            <View style={Styles.Background_Text_Layer2}>
                <Text style={Styles.Background_Text_First}>T</Text>
                <Text style={Styles.Background_Text}>HAI</Text>
            </View>
            <View style={Styles.Background_Layer3_Box}>
                <View>
                  <View  style={Styles.Background_Text_Layer3}>
                    <Text style={Styles.Background_Text_First}>F</Text>
                    <Text style={Styles.Background_Text}>OOD</Text>
                  </View>
                  <View style={Styles.Com_Background_Button_Box}>
                    <View style={Styles.Com_Background_Button}>
                      <Text style={Styles.Com_Background_Button_Text}>SELECT PICTURE</Text>
                      <Text style={Styles.Com_Background_Button_Detail_Text}>(.jpg, .png)</Text>
                      <TouchableOpacity onPress={() => onSelectCamera()}>
                        <NavigateButton text='CAMERA' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => openImagePicker()}>
                        <NavigateButton text='IMAGE' />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={onPressBack} style={Styles.Com_Back_Button_Box_SelectPicPage}>
                        <BackButton text='BACK'/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default SelectPicturePage
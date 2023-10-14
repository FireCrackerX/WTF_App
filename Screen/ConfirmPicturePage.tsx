import { View, Text, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import BothButton from '../Component/BothButton'
const ConfirmPicturePage = ({navigation, route}: {navigation:any, route:any}) => {
  let s = Styles.Picture;
  if(route.params.imageType === 'Camera'){
    s = Styles.Camera_Picture
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
                  <Text style={Styles.Com_Background_Button_Text}>CONFIRM PICTURE</Text>
                  <Text style={Styles.Com_Background_Button_Detail_Text}></Text>
                  <View style={Styles.Confirm_Picture_Back_Drop_Box}>
                      <View style={Styles.Confirm_Picture_Back_drop}>
                          <View style={Styles.Confirm_Picture_Box}>
                              <Image style={s} source={{uri: route.params.imageURL}}/>
                          </View>
                      </View>
                  </View>
                  <BothButton backText='BACK' nextText='CONFIRM' navigation={navigation} type={route.params.type} />
                </View>
                  </View>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ConfirmPicturePage
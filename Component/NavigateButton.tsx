import { Text, View, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles'

interface buttonDetail {
    text: string;
}

const image = {
    'DESSERT': require('../Image/Dessert_Icon.png'),
    'CURRY AND SOUP': require('../Image/Curry_Icon.png'),
    'DISH AND APPETIZER': require('../Image/Other_Icon.png'),
    'CAMERA': require('../Image/Camera_Icon.png'),
    'IMAGE': require('../Image/Image_Icon.png'),
}

const NavigateButton = (props: buttonDetail) => {
    return (
        <View>
            <View style={Styles.Com_Button_Box}>
                <View style={Styles.Com_Button_Rectangle}>
                    <Text style={Styles.Com_Button_Text}>{props.text}</Text>
                </View>
                <View style={Styles.Com_Button_Square}>
                    <Image source={image[props.text]} style={Styles.Com_Button_Icon} />
                </View>
            </View>
        </View>

    )
}

export default NavigateButton
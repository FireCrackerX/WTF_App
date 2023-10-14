import { View, Image } from 'react-native'
import React from 'react'
import Styles from '../Styles'

const SnapButton = () => {
  return (
    <View style={Styles.Com_Snap_Button}>
        <Image source={require('../Image/Snapshot_Icon.png')} style={Styles.Com_Button_Icon} />
    </View>
  )
}

export default SnapButton
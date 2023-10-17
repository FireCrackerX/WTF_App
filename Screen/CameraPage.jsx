import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Styles from '../Styles'
import SnapButton from '../Component/SnapButton'
import { Camera, useCameraDevice, useCameraFormat } from 'react-native-vision-camera'

const CameraPage = ({navigation, route}) => {
    // console.log(route.params.type)
    const camera = useRef();
    const [cameraPermission, setCameraPermission] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermissionStatus = await Camera.requestCameraPermission()
            // console.log('A : ', cameraPermissionStatus)
            setCameraPermission(cameraPermissionStatus)
        })()
    }, [])

    const device = useCameraDevice("back")
    const format = useCameraFormat(device, [
        {photoAspectRatio: 1},
    ])

    const handleTackSnapshot = async () => {
        try {
            const snapshot = await camera.current.takePhoto({
                qulity: 100,
                skipMetadata: true,
            })
            
            // console.log(snapshot.path)
            navigation.navigate('ConfirmPicturePage', {imageURL: 'file://'+snapshot.path, imageType: 'Camera', type: route.params.type})
        } catch (e) {
            console.log(e)
        }
    }

    const rederTakingSnapshot = () => {
        return (
            <View style={{width: '100%', height: '100%'}}>
                <View>
                    <Camera
                        style={{height: '100%', width: '100%'}}
                        ref={camera}
                        device={device}
                        format={format}
                        isActive
                        photo= {true}  
                    />
                </View>
            </View>
        )
    }

    const rederContent = () => {
        if(device === null) {
            console.log('device null')
            return null
        }
        if(cameraPermission != 'granted') {
            // console.log(cameraPermission != 'granted')
            return null
        }
        return rederTakingSnapshot()
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
                  <View style={Styles.Background_Text_Layer3}>
                    <Text style={Styles.Background_Text_First}>F</Text>
                    <Text style={Styles.Background_Text}>OOD</Text>
                  </View>
                  <View style={Styles.Com_Background_Button_Box}>
                    <View style={Styles.Com_Background_Button}>
                        <Text style={Styles.Com_Background_Button_Text}>TAKE A PICTURE</Text>
                        <Text style={Styles.Com_Background_Button_Detail_Text}></Text>
                        <View style={Styles.Camera_Back_Drop_Box}>
                            <View style={Styles.Confirm_Picture_Back_drop}>
                                <View style={Styles.Confirm_Picture_Box}>
                                    <View style= {Styles.Camera_Box}>
                                        {rederContent()}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={handleTackSnapshot} style={Styles.Com_Snap_Button_Box} >
                            <SnapButton text='Snapshot' style={Styles.Com_History_Button} />
                        </TouchableOpacity>
                        {/* <BothButton backText='BACK' nextText='CONFIRM' navigation={navigation} /> */}
                    </View>
                  </View>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default CameraPage
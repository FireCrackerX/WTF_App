import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import Styles from '../Styles'
import HistoryButton from '../Component/HistoryButton'
import RNFadedScrollView from 'rn-faded-scrollview'
import History_Widget from '../Component/History_Widget'
import fs from 'react-native-fs'

const HistoryPage = ({navigation}) => {
  const [historyList, setHistoryList] = useState([])
  const selectHistory = (data) => {
    navigation.navigate('SelectFoodFromAPIPage', {inputData : data, inputType: 'History', })
  }
  const onPressBackToHome = () => {
    navigation.navigate('SelectFoodTypePage')
  }

  const directory = fs.DocumentDirectoryPath;
  const filePath = `${directory}/testData.json`;

  useEffect(() => {
    fs.readFile(filePath, 'utf8')
      .then(data => {
        setHistoryList(JSON.parse(data))
      })
      .catch(error => {
      console.error('Error reading data from file:', error);
      });
  },[])
  // console.log(historyList[0].detail)

  return (
    <View style={Styles.Background2_Layer1_Box}>
      <View style={Styles.Background2_Layer2_Box}>
        <View style={Styles.Background2_Layer3_Box}>
          <View style={Styles.Com_Content_Background_Box}>
              <View style={Styles.Com_Background_Button}>
                  <View style={{marginTop: '-2%', height: '100%'}}>
                  <Text style={Styles.Com_Background_Button_Text}>HISTORY</Text>
                      <View style={Styles.Com_ScrollView_Style_Box_History}>
                          <RNFadedScrollView allowStartFade={true} allowEndFade={true} fadeColors={['rgba(229, 229, 229, 0)', 'rgba(31, 28, 24, 1)']} fadeSize={50} showsVerticalScrollIndicator={false} style={Styles.Com_ScrollView_Style} >
                              {historyList.map(d => (
                                <View style={Styles.History_Widget_Box} key={d.imageURL}>
                                  <TouchableOpacity onPress={() => selectHistory(d.detail)}>
                                    <History_Widget name={d.detail[0].name} date={d.date} imageURL={d.imageURL} imageType={d.imageType} />
                                  </TouchableOpacity>
                                </View>
                              ))}
                          </RNFadedScrollView>
                      </View>
                      <TouchableOpacity onPress={() => onPressBackToHome()} style={Styles.Com_YellowButton_DetailPage_Box}>
                          <HistoryButton text='BACK TO HOME' />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HistoryPage
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'
import FoodSelectWidget from '../Component/FoodSelectWidget'
import input from '../TestInput.json'
import fs from 'react-native-fs'

const SelectFoodFromAPIPage = ({navigation, route}) => {
  const selectFood = (data) => {
    // console.log(data)
    navigation.navigate('DetailPage', {data : data})
  }

  const date = new Date()
  let hh = date.getHours()
  if(hh < 10) {
    hh = '0' + hh
  }

  let mm = date.getMinutes()
  if(mm < 10) {
    mm = '0' + mm
  }

  let ss = date.getSeconds()
  if(ss < 10) {
    ss = '0'+ ss
  }

  let dateFormat = date.getDate()+'/'+(date.getMonth()+1) +'/'+date.getFullYear() + '\n' + hh + ":" + mm + ":" + ss

  const saveData = async () => {
    const directory = fs.DocumentDirectoryPath;
    const filePath = `${directory}/testData.json`;
    const his1 = {
        imageURL: route.params.imageURL,
        imageType : route.params.imageType,
        date: dateFormat ,
        detail: input,
    };

    let historyList = []

    await fs.readFile(filePath, 'utf8')
    .then(data => {
        const parsedData = JSON.parse(data);
        parsedData.forEach(item => {
            historyList.push(item)
            // console.log(item.date)
        });
        // historyList = parsedData
        // console.log('Data from file:', parsedData);
        // console.log(parsedData[0].data)
    })
    .catch(error => {
    console.error('Error reading data from file:', error);
    });

    // console.log(historyList)

    historyList.push(his1)
    // console.log('his : '+his1)

    fs.writeFile(filePath, JSON.stringify(historyList), 'utf8')
    .then(success => {
        console.log(`Data saved to ${filePath}`);
    })
    .catch(error => {
        console.error('Error writing data to file:', error);
    });

    // fs.readFile(filePath, 'utf8')
    // .then(data => {
    //     const parsedData = JSON.parse(data);
    //     console.log('Data from file:', parsedData);
    //     // console.log(parsedData[0])
    // })
    // .catch(error => {
    // console.error('Error reading data from file:', error);
    // });

  }

  if(route.params.inputType === 'API') {
    saveData()
  }

  return (
    <View style={Styles.Background2_Layer1_Box}>
      <View style={Styles.Background2_Layer2_Box}>
        <View style={Styles.Background2_Layer3_Box}>
            <View style={Styles.Com_Content_Background_Box}>
                <View style={Styles.Com_Background_Button}>
                    {route.params.inputData.map(d => (
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
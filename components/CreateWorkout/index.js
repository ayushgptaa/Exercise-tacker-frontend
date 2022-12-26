import { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import axios from 'axios'

import BoldText from '../BoldText'
import CustomButton from '../CustomButton'

export const CreateWorkout = () => {
  const [input, setInput] = useState('')

  const onPress = () => {
    console.log(input)
    var data = JSON.stringify({
      dayName: input,
    })

    var config = {
      method: 'post',
      url: 'http://192.168.1.9:3000/api/workouts',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <View>
      <BoldText>CreateWorkout</BoldText>
      <TextInput
        style={styles.input}
        placeholder="Enter a new exercise"
        value={input}
        setInput
        onChangeText={(text) => setInput(text)}
      />
      <CustomButton onPress={onPress}>Create a new workout</CustomButton>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 6,
    marginTop: 10,
  },

  button: {
    borderRadius: 6,
    textTransform: 'lowercase',
    marginTop: 10,
  },
})

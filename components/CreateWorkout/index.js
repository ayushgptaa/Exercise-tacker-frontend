import { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import BoldText from '../BoldText'
import CustomButton from '../CustomButton'

import API_URL from '../../constant'

import fetchReq from '../../utils/fetchReq'

const CreateWorkout = ({ getWorkouts }) => {
  const [input, setInput] = useState('')

  const onPress = async () => {
    var data = JSON.stringify({
      dayName: input,
    })

    const config = {
      method: 'post',
      url: `${API_URL}/workouts`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const res = await fetchReq(config)
    await getWorkouts()
  }

  return (
    <View>
      <BoldText>Create Workout</BoldText>
      <TextInput
        style={styles.input}
        placeholder="Enter a new workout"
        value={input}
        setInput
        onChangeText={(text) => setInput(text)}
      />
      <CustomButton onPress={onPress}>Create a new workout</CustomButton>
    </View>
  )
}

export const styles = StyleSheet.create({
  input: {
    padding: 10,
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

export default CreateWorkout

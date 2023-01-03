import { View, TextInput } from 'react-native'
import { useState } from 'react'
import axios from 'axios'

import BoldText from '../BoldText'
import CustomButton from '../CustomButton'

import { styles } from '../CreateWorkout'
import fetchReq from '../../utils/fetchReq'

const AddExercise = ({ id }) => {
  const [input, setInput] = useState('')

  const onPress = async () => {
    var data = JSON.stringify({
      name: input,
    })

    const config = {
      method: 'post',
      url: `http://192.168.1.9:3000/api/workouts/add-exercise/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    await fetchReq(config)
  }

  return (
    <View>
      <BoldText>Add Exercise</BoldText>
      <TextInput
        style={styles.input}
        placeholder="Enter a new exercise"
        value={input}
        setInput
        onChangeText={(text) => setInput(text)}
      />
      <CustomButton onPress={onPress}>Add a new exercise</CustomButton>
    </View>
  )
}

export default AddExercise

import { View, TextInput } from 'react-native'
import { useState } from 'react'

import BoldText from '../BoldText'
import CustomButton from '../CustomButton'

import { styles } from '../CreateWorkout'

import API_URL from '../../constant'

import fetchReq from '../../utils/fetchReq'

const AddExercise = ({ id, getExercises }) => {
  const [input, setInput] = useState('')

  const onPress = async () => {
    var data = JSON.stringify({
      name: input,
    })

    const config = {
      method: 'post',
      url: `${API_URL}/workouts/add-exercise/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const response = await fetchReq(config)
    if (response.status === 200) await getExercises()
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

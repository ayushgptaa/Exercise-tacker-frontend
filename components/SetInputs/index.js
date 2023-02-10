import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import API_URL from '../../constant'
import fetchReq from '../../utils/fetchReq'
import IconComponent from '../IconComponent'

const SetInputs = ({ sets, removeSet, getExercises }) => {
  const [weight, setWeight] = useState({})
  const [reps, setReps] = useState({})

  const updateSet = async (id) => {
    console.log(weight[`weight-${id}`], reps[`reps-${id}`])

    const data = JSON.stringify({
      reps: reps[`reps-${id}`],
      weight: weight[`weight-${id}`],
    })

    const config = {
      method: 'patch',
      url: `${API_URL}/workouts/update-set/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }
    const response = await fetchReq(config)

    if (response?.status === 200) await getExercises()
  }

  const weightHanlder = (value, input) => {
    setWeight((prev) => {
      return {
        ...prev,
        [input]: value,
      }
    })
  }

  const repsHanlder = (value, input) => {
    setReps((prev) => {
      return {
        ...prev,
        [input]: value,
      }
    })
  }

  return sets.map((set, index) => (
    <View style={styles.flex} key={set?._id}>
      <Text style={styles.center}>{index}</Text>
      <TextInput
        style={styles.center}
        keyboardType="number-pad"
        defaultValue={set?.weight?.toString()}
        value={weight[`weight-${set?._id}`]?.toString()}
        onChangeText={(value) => weightHanlder(value, `weight-${set?._id}`)}
      />
      <TextInput
        style={styles.center}
        keyboardType="number-pad"
        defaultValue={set?.reps?.toString()}
        value={reps[`reps-${set?._id}`]?.toString()}
        onChangeText={(value) => repsHanlder(value, `reps-${set?._id}`)}
      />

      <IconComponent name="delete" onPress={() => removeSet(set?._id)} style={styles.center} size={16} />

      <IconComponent
        name="check-circle"
        onPress={() => updateSet(set?._id)}
        style={styles.center}
        size={16}
        color="green"
      />
    </View>
  ))
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  center: {
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 12,
  },
})

export default SetInputs

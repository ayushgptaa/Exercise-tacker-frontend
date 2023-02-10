import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import BoldText from '../BoldText'
import DisplaySets from '../DisplaySets'
import IconComponent from '../IconComponent'

import API_URL from '../../constant'

import fetchReq from '../../utils/fetchReq'

const RenderItem = ({ exercise, getExercises }) => {
  var data = JSON.stringify([
    {
      weight: 0,
      reps: 0,
    },
  ])

  const addNewSet = async () => {
    const config = {
      method: 'post',
      url: `${API_URL}/workouts/add-sets/${exercise._id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    const response = await fetchReq(config)

    if (response.status === 200) await getExercises()
  }

  const removeSet = async (id) => {
    const config = {
      method: 'delete',
      url: `${API_URL}/workouts/remove-set/${id}`,
    }

    const response = await fetchReq(config)

    if (response?.status === 200) await getExercises()
  }

  const removeExercise = async (id) => {
    const config = {
      method: 'delete',
      url: `${API_URL}/workouts/remove-exercise/${id}`,
    }

    const response = await fetchReq(config)

    if (response?.status === 200) await getExercises()
  }

  return (
    <View style={styles.workout}>
      <View style={styles.flex}>
        <Text style={styles.name}>{exercise.name}</Text>
        <IconComponent name="delete" size={25} onPress={() => removeExercise(exercise?._id)} />
      </View>

      <DisplaySets sets={exercise.sets} removeSet={removeSet} getExercises={getExercises} />

      <TouchableOpacity style={styles.button} onPress={() => addNewSet()}>
        <Text style={styles.btnText}>Add set</Text>
      </TouchableOpacity>
    </View>
  )
}

const DisplayExercises = ({ exercises, getExercises }) => {
  return (
    <View style={styles.container}>
      <View>
        <BoldText>My workouts</BoldText>
      </View>

      {exercises.map((exercise) => {
        return <RenderItem exercise={exercise} getExercises={getExercises} key={exercise?._id} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 100,
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  workout: {
    // flex: 1,
    flexGap: 30,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 6,
    marginTop: 10,
    padding: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#39c8f7',
  },

  button: {
    padding: 8,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    marginTop: 10,
  },

  btnText: {
    fontSize: 14,
    textAlign: 'center',
  },
})

export default DisplayExercises

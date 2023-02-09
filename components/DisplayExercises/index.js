import { Text, FlatList, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import BoldText from '../BoldText'
import DisplaySets from '../DisplaySets'

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
  return (
    <View style={styles.workout}>
      <View>
        <Text style={styles.name}>{exercise.name}</Text>
      </View>

      <DisplaySets sets={exercise.sets} />

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

      <FlatList
        data={exercises}
        renderItem={({ item }) => <RenderItem exercise={item} getExercises={getExercises} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  workout: {
    flex: 1,
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

import { Text, FlatList, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import BoldText from '../BoldText'
import DisplaySets from '../DisplaySets'

const RenderItem = ({ exercise }) => {
  return (
    <View style={styles.workout}>
      <View>
        <Text style={styles.name}>{exercise.name}</Text>
      </View>

      <DisplaySets sets={exercise.sets} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Add set</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => deleteWorkouts(item._id)}>
        <Icon name="delete" size={22} color="#000" />
      </TouchableOpacity> */}
    </View>
  )
}

const DisplayExercises = ({ exercises }) => {
  return (
    <View style={styles.container}>
      <View>
        <BoldText>My workouts</BoldText>
      </View>

      <FlatList
        data={exercises}
        renderItem={({ item }) => <RenderItem exercise={item} />}
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
    padding: 10,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    marginTop: 10,
  },

  btnText: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default DisplayExercises

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import BoldText from '../BoldText'

import convertDate from '../../utils/convertDate'

const RenderItem = ({ exercise, deleteWorkouts }) => {
  return (
    <View style={styles.workout}>
      <View>
        <Text>Workout Name : {exercise?.dayName}</Text>
        <Text>Created at : {convertDate(exercise?.createdAt)}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteWorkouts(exercise._id)}>
        <Icon name="delete" size={22} color="#000" />
      </TouchableOpacity>
    </View>
  )
}

const DisplayWorkouts = ({ workouts, deleteWorkouts, navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <BoldText>My workouts</BoldText>
      </View>

      {workouts.map((exercise) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('IndWorkout', { exercise })
            }}
            key={exercise?._id}>
            <RenderItem exercise={exercise} deleteWorkouts={deleteWorkouts} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingBottom: 40,
  },

  workout: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 30,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 6,
    marginTop: 12,
    marginBottom: 10,
  },
})

export default DisplayWorkouts

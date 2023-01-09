import { Text, FlatList, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import BoldText from '../BoldText'

import convertDate from '../../utils/convertDate'

const RenderItem = ({ item, deleteWorkouts }) => {
  return (
    <View style={styles.workout}>
      <View>
        <Text>Workout Name : {item.dayName}</Text>
        <Text>Created at : {convertDate(item.createdAt)}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteWorkouts(item._id)}>
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

      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('IndWorkout', { item })
            }}>
            <RenderItem item={item} deleteWorkouts={deleteWorkouts} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
        horizontal={false}
      />
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

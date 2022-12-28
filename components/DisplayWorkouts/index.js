import { Text, FlatList, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import BoldText from '../BoldText'

import convertDate from '../../utils/convertDate'

const DisplayWorkouts = ({ workouts, deleteWorkouts }) => {
  const RenderItem = ({ item }) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText>My workouts</BoldText>
      </View>
      <FlatList data={workouts} renderItem={RenderItem} keyExtractor={(item) => item._id} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  workout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 6,
    marginTop: 10,
  },
})

export default DisplayWorkouts

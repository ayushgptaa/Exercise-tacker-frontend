import { Text, FlatList, View, SafeAreaView, StyleSheet } from 'react-native'

import BoldText from '../BoldText'

import convertDate from '../../utils/convertDate'

const DisplayWorkouts = ({ workouts }) => {
  const RenderItem = ({ item }) => {
    return (
      <View style={styles.workout}>
        <Text>Workout Name : {item.dayName}</Text>
        <Text>Created at : {convertDate(item.createdAt)}</Text>
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
    padding: 30,
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 6,
    marginTop: 10,
  },
})

export default DisplayWorkouts

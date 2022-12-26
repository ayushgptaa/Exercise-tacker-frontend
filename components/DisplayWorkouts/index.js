import { Text, FlatList, View, SafeAreaView, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

import convertDate from '../../utils/convertDate'
import BoldText from '../BoldText'

const DisplayWorkouts = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://192.168.1.9:3000/api/workouts',
      headers: {},
    }

    axios(config)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

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
      <FlatList data={data} renderItem={RenderItem} keyExtractor={(item) => item._id} />
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

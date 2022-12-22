import { Text, FlatList, View, SafeAreaView, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import axios from 'axios'

import convertDate from '../../utils/convertDate'

const DisplayWorkouts = () => {
  const [data, setData] = useState([])

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.workout}>
        <Text>Workout Name : {item.dayName}</Text>
        <Text>Created at : {convertDate(item.createdAt)}</Text>
      </View>
    )
  }

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

  return (
    <SafeAreaView>
      <View>
        <Text>My workouts</Text>
      </View>
      <FlatList data={data} renderItem={RenderItem} keyExtractor={(item) => item._id} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  workout: {
    padding: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginTop: 10,
  },
})

export default DisplayWorkouts

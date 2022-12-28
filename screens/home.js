import { useState, useEffect } from 'react'
import { View } from 'react-native'
import axios from 'axios'

import CreateWorkout from '../components/CreateWorkout'
import DisplayWorkouts from '../components/DisplayWorkouts'

const Home = () => {
  const [workouts, setWorkouts] = useState([])

  const getWorkouts = () => {
    var config = {
      method: 'get',
      url: 'http://192.168.1.9:3000/api/workouts',
      headers: {},
    }

    axios(config)
      .then(function (response) {
        setWorkouts(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <View>
      <CreateWorkout getWorkouts={getWorkouts} />
      <DisplayWorkouts workouts={workouts} />
    </View>
  )
}

export default Home

import { useState, useEffect } from 'react'
import axios from 'axios'

import CreateWorkout from '../components/CreateWorkout'
import DisplayWorkouts from '../components/DisplayWorkouts'
import Container from '../components/Container'

const Home = ({ navigation }) => {
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

  const deleteWorkouts = (id) => {
    var config = {
      method: 'delete',
      url: `http://192.168.1.9:3000/api/workouts/${id}`,
      headers: {},
    }

    axios(config)
      .then(function (response) {
        getWorkouts()
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <Container>
      <CreateWorkout getWorkouts={getWorkouts} />
      <DisplayWorkouts workouts={workouts} deleteWorkouts={deleteWorkouts} navigation={navigation} />
    </Container>
  )
}

export default Home

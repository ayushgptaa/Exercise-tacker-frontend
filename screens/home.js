import { useState, useEffect } from 'react'

import CreateWorkout from '../components/CreateWorkout'
import DisplayWorkouts from '../components/DisplayWorkouts'
import Container from '../components/Container'

import API_URL from '../constant'

import fetchReq from '../utils/fetchReq'

const Home = ({ navigation }) => {
  const [workouts, setWorkouts] = useState([])

  const getWorkouts = async () => {
    const response = await fetchReq()
    setWorkouts(response.data)
  }

  const deleteWorkouts = async (id) => {
    const config = {
      method: 'delete',
      url: `${API_URL}/workouts/${id}`,
    }
    const response = await fetchReq(config)
    if (response.status === 200) {
      setWorkouts((prevWorkouts) => {
        return prevWorkouts.filter((workout) => workout._id !== id)
      })
    }
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

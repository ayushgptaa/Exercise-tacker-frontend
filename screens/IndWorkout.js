import { useState, useEffect } from 'react'

import AddExercise from '../components/AddExercise'
import Container from '../components/Container'
import DisplayExercises from '../components/DisplayExercises'

import API_URL from '../constant'

import fetchReq from '../utils/fetchReq'

const IndWorkout = ({ route }) => {
  const [exercises, setExercises] = useState([])
  const { item } = route.params
  const { _id } = item

  const getExercises = async () => {
    const config = {
      method: 'get',
      url: `${API_URL}/workouts/${_id}`,
    }

    const res = await fetchReq(config)

    if (res.status === 200) setExercises(res.data.exercises)
  }

  useEffect(() => {
    getExercises()
  }, [])

  return (
    <Container>
      <AddExercise id={_id} getExercises={getExercises} />
      <DisplayExercises exercises={exercises} />
    </Container>
  )
}

export default IndWorkout

import { useState, useEffect } from 'react'

import AddExercise from '../components/AddExercise'
import Container from '../components/Container'
import DisplayExercises from '../components/DisplayExercises'

import fetchReq from '../utils/fetchReq'

const IndWorkout = ({ route }) => {
  const [exercises, setExercises] = useState([])
  const { item } = route.params
  const { _id } = item

  const getExercises = async () => {
    const config = {
      method: 'get',
      url: `http://192.168.0.138:3000/api/workouts/${_id}`,
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

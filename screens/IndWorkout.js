import { useState, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'

import AddExercise from '../components/AddExercise'
import Container from '../components/Container'
import DisplayExercises from '../components/DisplayExercises'

import API_URL from '../constant'

import convertDate from '../utils/convertDate'
import convertDay from '../utils/convertDay'
import fetchReq from '../utils/fetchReq'

const IndWorkout = ({ route }) => {
  const [exercises, setExercises] = useState([])
  const { item } = route.params
  const { _id, dayName, createdAt } = item

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
      <Text style={styles.heading}>
        {dayName} ({convertDay(createdAt)} {convertDate(createdAt)})
      </Text>
      <AddExercise id={_id} getExercises={getExercises} />
      <DisplayExercises exercises={exercises} />
    </Container>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
})

export default IndWorkout

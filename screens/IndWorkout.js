import { View, Text } from 'react-native'

import AddExercise from '../components/AddExercise'
import BoldText from '../components/BoldText'
import Container from '../components/Container'

const IndWorkout = ({ route }) => {
  const { item } = route.params
  const { _id, exercises } = item

  return (
    <Container>
      <AddExercise id={_id} />
    </Container>
  )
}

export default IndWorkout

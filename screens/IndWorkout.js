import { View, Text } from 'react-native'
import Container from '../components/Container'

const IndWorkout = ({ route }) => {
  const { item } = route.params

  return (
    <Container>
      <Text>{item.dayName}</Text>
    </Container>
  )
}

export default IndWorkout

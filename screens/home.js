import { View } from 'react-native'

import { CreateWorkout } from '../components/CreateWorkout'
import DisplayWorkouts from '../components/DisplayWorkouts'

const Home = () => {
  return (
    <View>
      <CreateWorkout />
      <DisplayWorkouts />
    </View>
  )
}

export default Home

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/home'
import IndWorkout from './screens/IndWorkout'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="IndWorkout" component={IndWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

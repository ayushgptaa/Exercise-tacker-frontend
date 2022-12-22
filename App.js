import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from './screens/home'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 10,
  },
})

import { ScrollView, StyleSheet } from 'react-native'

const Container = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 25,
  },
})

export default Container

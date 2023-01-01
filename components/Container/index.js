import { View, StyleSheet } from 'react-native'

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 20,
  },
})

export default Container

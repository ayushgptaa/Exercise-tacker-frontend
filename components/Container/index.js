import { View, StyleSheet } from 'react-native'

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    margin: 25,
  },
})

export default Container

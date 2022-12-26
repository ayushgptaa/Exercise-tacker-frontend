import { Text, StyleSheet } from 'react-native'

const BoldText = ({ children }) => {
  return <Text style={styles.bold}>{children}</Text>
}

const styles = StyleSheet.create({
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default BoldText

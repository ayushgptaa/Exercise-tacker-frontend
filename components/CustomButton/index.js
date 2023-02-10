import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CustomButton = ({ onPress, children, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#39c8f7',
  },

  text: {
    textAlign: 'center',
    color: '#fff',
  },
})

export default CustomButton

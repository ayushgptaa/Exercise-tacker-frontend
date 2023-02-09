import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SetInputs = ({ sets, removeSet }) => {
  return sets.map((set, index) => (
    <View style={styles.flex} key={set?._id}>
      <Text style={styles.center}>{index}</Text>
      <TextInput
        style={styles.center}
        keyboardType="number-pad"
        defaultValue={set?.weight.toString()}
        value={set?.weight.toString()}
      />
      <TextInput
        style={styles.center}
        keyboardType="number-pad"
        defaultValue={set?.reps.toString()}
        value={set?.reps.toString()}
      />
      <TouchableOpacity style={styles.center} onPress={() => removeSet(set?._id)}>
        <Icon name="delete" size={16} color="#000" />
      </TouchableOpacity>
    </View>
  ))
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  center: {
    textAlign: 'left',
    flex: 1,
    fontSize: 12,
  },
})

export default SetInputs

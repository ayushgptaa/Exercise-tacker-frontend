import { View, Text, StyleSheet } from 'react-native'

import SetInputs from '../SetInputs'

const CenterText = ({ children }) => {
  return <Text style={styles.center}>{children}</Text>
}

const DisplaySets = ({ sets, removeSet, getExercises }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <CenterText>SET</CenterText>
        <CenterText>KG</CenterText>
        <CenterText>REPS</CenterText>
        <CenterText />
        <CenterText />
      </View>

      <SetInputs sets={sets} removeSet={removeSet} getExercises={getExercises} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  center: {
    textAlign: 'center',
    flex: 1,
    fontSize: 12,
  },
})

export default DisplaySets

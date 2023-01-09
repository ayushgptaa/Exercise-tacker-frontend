import { View, Text, StyleSheet, FlatList, ListItem } from 'react-native'

// const data = [
//   { key: '1', name: 'John', age: '20' },
//   { key: '2', name: 'Jane', age: '24' },
//   { key: '3', name: 'Bob', age: '30' },
// ]

// const TableRow = () => {}

// const Table = () => (
//   <FlatList
//     data={data}
//     renderItem={({ item }) => (
//       <ListItem>
//         <Text>{item.key}</Text>
//         <Text>{item.name}</Text>
//         <Text>{item.age}</Text>
//       </ListItem>
//     )}
//   />
// )

const DisplaySets = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text>SET</Text>
        <Text>KG</Text>
        <Text>REPS</Text>
      </View>
      <Text>DisplaySets</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default DisplaySets

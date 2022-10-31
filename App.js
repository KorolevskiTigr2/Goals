import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
   <View style={styles.Appcontainer}>
        <View style={styles.TextInput}>
            <TextInput styles={styles.TextInput} placeholder='Your cource goal!' />
            <Button title='Add Goals..'/>
        </View>
        <Text>List of goals...</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    padiing: 50,
    bottom: -25,
   },
  inputContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    marginRight: 8,
    padiing: 8,
   },
});

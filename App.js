import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');
  const [calc1, setCalc1] = useState('');
  const [calc2, setCalc2] = useState('');
  const doAddition = () => {
    let res = parseInt(calc1) + parseInt(calc2);
    setResult(res);
  }
  const doSubstraction = () => {
    let res = parseInt(calc1) - parseInt(calc2);
    setResult(res);
  }
  return (
    <View style={styles.container}>
      <Text style = {styles.margins} >Result: {result} </Text>
      <TextInput style = {[styles.textinputs, styles.margins]}
      keyboardType = 'numeric'
      onChangeText={calc1 => setCalc1(calc1)}
      value={calc1}/>
      <TextInput style = {[styles.textinputs, styles.margins]}
      keyboardType = 'numeric'
      onChangeText={calc2 => setCalc2(calc2)}
      value={calc2}/>
      <View style = {styles.buttons} >
        <Button onPress = {doAddition} title=" + " />
        <Button onPress = {doSubstraction} title=" - " />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputs: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
  },
  margins: {
    margin: '3%',
  }
});

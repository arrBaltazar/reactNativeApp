import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style ={styles.text}>What good things happened today?</Text>
       <TextInput style={styles.input} placeholder='good thing'></TextInput>
       <TextInput style={styles.input} placeholder='good thing'></TextInput>
       <TextInput style={styles.input} placeholder='good thing'></TextInput>
       <Text style ={styles.text}>What could have gone better?</Text>
       <TextInput style={styles.input}placeholder='Improvements'></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#004080',
    alignItems: 'center',
    justifyContent: 'center',
    padding:16,
  },

  text: {
    fontFamily:'Avenir Next',
    marginBottom:16,
  },

  input: {
    fontFamily:'Avenir Next',
    padding: 12,
    width: '100%',
    backgroundColor:'#fff',
    marginBottom: 16,
  }

});

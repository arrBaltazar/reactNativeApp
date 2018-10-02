import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';


export default class screenOne extends React.Component {
  render() {
    return (
    
      <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.headerText}>Header Section</Text>
       </View>
        <View style={styles.centering}>
          <Text style ={styles.text}>What good things happened today?</Text>
          <TextInput style={styles.input} placeholder='good thing'></TextInput>
          <TextInput style={styles.input} placeholder='good thing'></TextInput>
          <TextInput style={styles.input} placeholder='good thing'></TextInput>
          <Text style ={styles.text}>What could have gone better?</Text>
          <TextInput style={styles.input}placeholder='Improvements'></TextInput>
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#cce6ff',
    
  },

   centering:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:16,
   },

  header:{
    backgroundColor: '#ccffcc',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    marginTop:30,
  },

  headerText:{
    color:'#3399ff',
    fontSize:18,
    padding:26,

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

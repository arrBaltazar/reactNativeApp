import React from 'react';
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView, ScrollView } from 'react-native';


export default class screenOne extends React.Component {

  static navigationOptions={
    title:"Content Section",
  };


  render() {
    return (
      
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={80} style={styles.container}>
     
       <View style={styles.header}>
        <Text style={styles.headerText}>Header Section</Text>
       </View>
        <View style={styles.centering}>

         <ScrollView >
          <Text style ={styles.text}>What good things happened today?</Text>
          <TextInput style={styles.input} 
           placeholder='good thing'
           underlineColorAndroid= 'transparent'
           autoCorrect={false}>
           </TextInput>

          <TextInput style={styles.input} 
          placeholder='good thing' 
          underlineColorAndroid= 'transparent'
          autoCorrect={false}>
          </TextInput>

          <TextInput style={styles.input} 
          placeholder='good thing'
          underlineColorAndroid= 'transparent'
          autoCorrect={false}>
          </TextInput>

          <Text style ={styles.text}>What could have gone better?</Text>
          <TextInput style={styles.input}
          placeholder='Improvements'
          underlineColorAndroid= 'transparent'
          autoCorrect={false}>
          </TextInput>
          </ScrollView>       
        </View>
       
      </KeyboardAvoidingView>
    
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
    marginBottom:16,
  },

  input: {
   
    padding: 12,
    width: '100%',
    backgroundColor:'#fff',
    marginBottom: 16,
  }

});

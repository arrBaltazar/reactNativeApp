import React from 'react';
import { StyleSheet, Text, View,TextInput,KeyboardAvoidingView, ScrollView,TouchableOpacity,Platform } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';

export default class screenOne extends React.Component {

  static navigationOptions={
    title:"Content Section",
  };


  render() {
    return (
      

 <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={ Platform.OS === 'ios' ? 60 : 160} style={styles.container} >     
      <View style={styles.header}>
        <Text style={styles.headerText}>Header Section</Text>
      </View>
        
      <View style={styles.centering}>

        <ScrollView >
          <Text style ={styles.text}>What good things happened today?</Text>
          <TextInput style={styles.textInput} 
            placeholder='good thing'
            underlineColorAndroid= 'transparent'
            autoCorrect={false}>
           </TextInput>

          <TextInput style={styles.textInput} 
            placeholder='good thing' 
            underlineColorAndroid= 'transparent'
            autoCorrect={false}>
          </TextInput>

          <TextInput style={styles.textInput} 
            placeholder='good thing'
            underlineColorAndroid= 'transparent'
            autoCorrect={false}>
          </TextInput>

          <Text style ={styles.text}>What could have gone better?</Text>
          <TextInput style={styles.textInput}
            placeholder='Improvements'
            underlineColorAndroid= 'transparent'
            autoCorrect={false}>
          </TextInput>
        </ScrollView>       
      </View>
       
      <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}
          >
          <Text style={styles.buttonText}>Submit</Text>
     </TouchableOpacity>
      

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
    
  },

  headerText:{
    color:'#3399ff',
    fontSize:18,
    padding:26,

  },

  text: {
    marginBottom:16,
  },

  textInput: {
   
    ...Platform.select({
      ios: {
        padding:12,
      },
      android: {
        padding:4,
      },
     }),
   
    width: '100%',
    backgroundColor:'#fff',
    marginBottom: 16,
  },
  
     button:{
        backgroundColor:"#bdc3c7",
        paddingVertical:15,
        margin:10,
        marginTop:10,
        borderRadius:15
    },

    buttonText:{
        textAlign:"center"
    },

});

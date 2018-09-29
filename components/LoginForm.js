import React from 'react';
import { StyleSheet, TextInput, View,Text,TouchableOpacity} from 'react-native';

export default class LoginForm extends React.Component{
    render(){
        return (

            <View style={styles.container}>
               
                <TextInput style={styles.textInput}
                            placeholder="username"
                            returnKeyType="next"
                            onSubmitEditing={()=>this.passwordInput.focus()}
                            keyboardType= 'email-address'
                            autoCorrect= {false}
                            >
                           
                </TextInput>

                <TextInput style={styles.textInput}
                           placeholder="password"
                           returnKeyType="go"
                           secureTextEntry
                           ref={(input)=>this.passwordInput = input}>
                </TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
            </View> 
        
            );
    }

}

const styles = StyleSheet.create({
    
    container:{
        padding:18
    },

    textInput:{

        height:30,
        backgroundColor:'#ecf0f1',
        margin:10,
        paddingLeft:20
    },

    button:{
        backgroundColor:"#bdc3c7",
        paddingVertical:15,
        margin:10,
        marginTop:10
    },

    buttonText:{
        textAlign:"center"
    }

});
import React from 'react';
import { StyleSheet, TextInput, View,Text,TouchableOpacity,Button} from 'react-native';

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
                            underlineColorAndroid= 'transparent'
                            >
                           
                </TextInput>

                <TextInput style={styles.textInput}
                           placeholder="password"
                           returnKeyType="go"
                           secureTextEntry
                           underlineColorAndroid= 'transparent'
                           ref={(input)=>this.passwordInput = input}>
                </TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                            onPress={()=> this.props.navigation.navigate('Profile')}>Login</Text>
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
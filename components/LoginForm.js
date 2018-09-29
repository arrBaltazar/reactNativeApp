import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default class LoginForm extends React.Component{
    render(){
        return (

            <View style={styles.container}>
               
                <TextInput style={styles.textInput}
                            placeholder="username"
                            returnKeyType="next">
                           
                </TextInput>

                <TextInput style={styles.textInput}
                           placeholder="password"
                           returnKeyType="go"
                           secureTextEntry>
                    
                </TextInput>
            </View> 
        
            );
    }

}

const styles = StyleSheet.create({
    
    container:{
        padding:30
    },

    textInput:{

        height:30,
        backgroundColor:'green',
        margin:10,
        paddingLeft:20
    }

});
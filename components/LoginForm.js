import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default class LoginForm extends React.Component{
    render(){
        return (

            <View style={styles.container}>
               
                <TextInput style={styles.textInput}>

                </TextInput>

                <TextInput style={styles.textInput}>
                    
                </TextInput>
            </View> 
        
            );
    }

}

const styles = StyleSheet.create({
    container:{
        padding:20
    },

    textInput:{

        height:30,
        backgroundColor:'green',
        margin:10
    }

});
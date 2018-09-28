import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component{
    render(){   
        return(
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('Project/Images/computer.jpg')}
                />
                <Text style={styles.logoText}>Test Login Style</Text>
              </View>
            
              <View styles={styles.formContainer}>
                <LoginForm />
              </View>
            </View>
        )
        

    }
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'grey'
    },

    logoContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center', 

    },

    logo:{
        width:100,
        height:100
    },

    logoText:{
        textAlign:'center',
        marginTop:15,
        opacity:.7
    }
});
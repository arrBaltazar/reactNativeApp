import React from 'react';
import { StyleSheet, Text, View,Image,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component{

static navigationOptions={
    title:"Main Page",
    headerStyle: {
      backgroundColor: '#b1bdd1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
};
    

    render(){   
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../Images/computer.jpg')}
                />
                <Text style={styles.logoText}>Test Login Style</Text>
              </View>
            
              <View styles={styles.formContainer}>
                <LoginForm navigation={this.props.navigation} />
              </View>
            </KeyboardAvoidingView>
        )
        

    }
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#3c6382'
    },

    logoContainer:{
        marginTop:40,
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center', 
       
    },

    logo:{
        width:100,
        height:100,
        borderWidth:1,
        borderRadius:50
    },

    logoText:{
        textAlign:'center',
        marginTop:15,
        opacity:.7
    }
});
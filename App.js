import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Login from './components/Login';
import screenOne from './components/screenOne';
import {createStackNavigator} from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  Home: { screen: Login },
  Profile: { screen: screenOne },
});

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});

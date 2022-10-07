import React from 'react';  
import {StyleSheet,SafeAreaView,Text,View,Image,Button} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import Flatbutton from './welcomebutton';
import { ScrollView } from 'react-native-gesture-handler';
import loginScreen from './loginpage';



const welcome = props => {
  const NavigateToLogin = () =>{
    props.navigation.navigate('login');
}
const NavigateToSignup = () =>{
  props.navigation.navigate('signup');
} 

    return (
      <SafeAreaView>
        <View style={{backgroundColor:'#ffffff',height:800}}>
    <View style={styles.body}>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Please login or sign up to continue.</Text>
      </View>
      <View style={{backgroundColor:'#ffffff'}}>
      <Image source={require('./welcomeimage.png')} style={{height:300,width:300,marginLeft:60}} />
      </View>
      <View style={styles.body1}><Flatbutton text='Sign Up' onPress={ ()=> NavigateToSignup() }/>
      </View>
      <View style={styles.MainContainer}>
 
 <Text>Already have an Account?  <Text style={styles.TextStyle} onPress={ ()=> NavigateToLogin() } >Log in</Text> </Text>

</View>
</View>
    </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    body: {
      alignItems:'center',
      justifyContent:'center',
    },
    body1:{
      
    },
    text1: {
      
      marginTop: 60,
      marginLeft: 10,
      color: '#391593',
      fontSize: 40,
      fontWeight:'bold',
    },
    input: {
      marginTop: 120,
      color: '#391593',
    },
    text2:{
      color:'#1E1E1E',
      fontSize: 20,
      fontWeight:'italics',
      margin: 10,
      //color: '#391593'
  
    },
    text3:{
      color:'#1E1E1E',
      fontSize: 18,
      fontWeight:'italics',
      marginTop:15,
      marginLeft: 25,
      margin: 8,
      //color: '#391593'
  },
  image1:{
    marginTop: 30,
    width: 400, 
    height: 300,
    marginLeft:-15,
  },
  MainContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffffff',
    marginTop:10,
  },
  TextStyle: {
    marginTop:20,
    color: '#E91E63',
    textDecorationLine: 'underline'
  
  },
  });


export default welcome;
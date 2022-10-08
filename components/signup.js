import { useState } from 'react';

import {StyleSheet, Text, View,SafeAreaView,StatusBar,ScrollView,TextInput,Image,props,Button} from 'react-native'; 
import Flatbuttoon from './signupbutton';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const styles = StyleSheet.create({
    text2:{
      marginTop: 10,
    }, header:{
      fontSize: 40,
      color: '#1E1E1E', 
      fontWeight: 'bold',
     },
     acc:{
      fontWeight:'bold',
      fontSize: 24,
      marginLeft: 20,
      color:'#1E1E1E',
      marginBottom:2,
     },
     body:{
      backgroundColor:'#ffffff',
      marginLeft:-25,
     },
     input:{
      height : 40,
      width: 290,
      margin : 18,
      borderWidth: 3,
      marginLeft: 40,
      fontWeight: 'bold',
      borderBottomColor: '#391593',
      borderTopWidth: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderLeftColor: '#ffffff',
      borderRightColor: '#ffffff',
     },
     image1:{
      backgroundColor:'#ffffff', 
      width: 150,
      marginLeft:160,
      height:200,
    
    },
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#ffffff',
    },
    TextStyle: {
    
      color: '#E91E63',
      textDecorationLine: 'underline'
    
    }
    
    });

export default function Signupscreen(props){
    const [textInputName, setTextInputName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
      console.log('HANDLE SING UP');
        createUserWithEmailAndPassword(auth, email, password)
            .then(useCreds => {
              console.log('USE CREDSS');
              console.log({useCreds});
            })
           // .catch(err => alert(err.message));
        setEmail('');
        setPassword('');
    }
  
    const NavigateToLogin = () =>{
      
        // //Check for the Name TextInput
        // if (!textInputName.trim()) {
        //   alert('Please Fill up all the values.');
        //   return;
        // }
        // if(email.length === 0 || password.length === 0) {
        //     alert('Please fill mandatory fields');
        //     return;
        // }
        handleSignup();
        //Checked Successfully
        //Do whatever you want
        if(email.length === 0 || password.length === 0) {
            alert('Please fill mandatory fields');
               return;
           }
         props.navigation.navigate('login');
      };
    
  
    return (
      <SafeAreaView>
       <ScrollView>
      <StatusBar
       backgroundColor="#391593"/>
       <View style= {styles.body}>
       <Image style={styles.image1} source={require('./signuplogo.png')}/>
       </View>
       <View style={{padding: -2,backgroundColor:'#ffffff'}}>
         <Text style={styles.acc}>     Create a new account</Text>
       </View>
       <View style={{padding: 25,backgroundColor:'#ffffff',marginTop:-6}}>
         <TextInput
         style={styles.input}
         placeholder ="Email"
         autoCapitalize='none'
         autoCorrect={false}
         onChangeText={
          (value) => setEmail(value)
        }
        
         />
          <TextInput
         style={styles.input}
         placeholder ="USER NAME"
         onChangeText={
          (value) => setTextInputName(value)
        }
         />
         <TextInput
         style={styles.input}
         placeholder ="PHONE NUMBER"
         onChangeText={
          (value) => setTextInputName(value)
        }
         />
         <TextInput
         style={styles.input}
         placeholder ="PASSWORD"
         secureTextEntry={true}
         icon={<Text>Show</Text>}
         iconPosition="right"
         autoCapitalize='none'
         autoCorrect={false}
         onChangeText={
          (value) => setPassword(value)
        }
         />
       
         <Flatbuttoon text='Sign Up' onPress={()=>NavigateToLogin()}/>
       </View>
       <View style={styles.MainContainer}>
   
   </View>
       <View style={{backgroundColor:'#ffffff',height:130}}></View>
       </ScrollView>    
       </SafeAreaView>   
    );
  };

  
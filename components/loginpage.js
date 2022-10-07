import React, {useEffect, useState} from 'react';  
import {StyleSheet, Text, View,SafeAreaView,StatusBar,ScrollView,TextInput,Image,props,Button} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
//import welcome from './components/welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flatbutton from './loginbutton';
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
//rimport mainscreen from './mainpage';





export default function loginScreen(props) {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
``
    useEffect(() => {
      const unsubscribe  = onAuthStateChanged(auth, (user) => {
        console.log('USER', user);
        if (user) {
          c
          props.navigation.navigate('mainscreen');
        }

      });
      return () => unsubscribe();
    }, []);
    
    const handleLogin = () => {
      console.log('dedwwewedwe');
      signInWithEmailAndPassword(auth, employeeId, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        props.navigation.navigate('mainscreen');
        console.log({user});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    }

    const NavigateTomainscreen = () =>{

      handleLogin();
      // props.navigation.navigate('mainscreen');
    };


    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{backgroundColor:'#ffffff'}}>
        <View style={styles.view1}>
        <Image source= { require('./loginimage.png')} style={{width:250,height:270,marginTop:-20}} />
        </View>
        <View style={styles.view2}>
        <Text style={styles.text1}>Login</Text>
        </View>
        <View style={styles.view3}>
        <TextInput style={styles.input1} placeholder="Enter Employee Id" autoCapitalize='none' autoCorrect={false}  
        onChangeText={
            (value) => setEmployeeId(value)
          }/>
        <TextInput style={styles.input1} placeholder="Password" 
        autoCapitalize='none' autoCorrect={false} secureTextEntry={true}
        onChangeText={
            (value) => setPassword(value)
          }
        />
        
        <TextInput style={styles.input1} placeholder="Enter OTP"/>  
        </View>
        <View style={styles.button1} >
          <Flatbutton text='Request OTP' onPress={()=>alert("OTP send to your number")}/>
        
        </View>
        <View style={styles.button2}>
          <Flatbutton text='LOGIN' onPress={()=>NavigateTomainscreen()}/>
        </View>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
  
    first:{
      marginTop:50,
    },
      view1:{
        alignItems:'center',
        backgroundColor: '#ffffff',
      },
      text1:{
        margin:5,
        fontWeight:'bold',
        fontSize: 38,
        color:'#1E1E1E',
      },
      view2:{
        marginTop: -35,
        alignItems: 'center',
        backgroundColor:'#ffffff',
      },
      view3:{
        alignItems:'baseline',
        marginLeft:-5,
        borderRadius:10,
        backgroundColor:'#ffffff',
      },
      input1:{
        backgroundColor:'#ffffff',
        marginTop:20,
        marginLeft:25,
        marginRight:25,
        width:290,
        alignSelf:'center',
        height : 40,  
        borderWidth: 3,
        fontWeight: 'bold',
        borderBottomColor: '#391593',
        borderTopWidth: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
      },
      button1:{
        marginTop:10,
        width:200,
        marginLeft:206,
      },
      button2:{
        height:250,
        marginTop:80,
        alignItems:'center',
        
      },
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
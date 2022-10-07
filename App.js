import React from 'react';  
import {StyleSheet, Text, View,SafeAreaView,StatusBar,ScrollView,TextInput,Image,props,Button} from 'react-native';  
import { NavigationContainer } from '@react-navigation/native';
import welcome from './components/welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flatbutton from './components/loginbutton';
import Flatbuttonn from './components/requestotp';
import Flatbuttoon from './components/signupbutton';
import loginScreen from './components/loginpage';

function Signupscreen(props){

  const NavigateToLogin = () =>{
    props.navigation.navigate('login');
  } 
  
  return (
    <SafeAreaView>
     <ScrollView>
    <StatusBar
     backgroundColor="#391593"/>
     <View style= {styles.body}>
     <Image style={styles.image1} source={require('./components/signuplogo.png')}/>
     </View>
     <View style={{padding: -2,backgroundColor:'#ffffff'}}>
       <Text style={styles.acc}>     Create a new account</Text>
     </View>
     <View style={{padding: 25,backgroundColor:'#ffffff',marginTop:-6}}>
       <TextInput
       style={styles.input}
       placeholder ="EMPLOYEE ID"
       autoCapitalize='none'
       autoCorrect={false}
      
       />
        <TextInput
       style={styles.input}
       placeholder ="USER NAME"
       />
       <TextInput
       style={styles.input}
       placeholder ="PHONE NUMBER"
         
       />
       <TextInput
       style={styles.input}
       placeholder ="PASSWORD"
       secureTextEntry={true}
       icon={<Text>Show</Text>}
       iconPosition="right"
       autoCapitalize='none'
       autoCorrect={false}
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


/*function loginScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor:'#ffffff'}}>
      <View style={styles.view1}>
      <Image source= { require('./components/loginimage.png')} style={{width:250,height:270,marginTop:-20}} />
      </View>
      <View style={styles.view2}>
      <Text style={styles.text1}>Login</Text>
      </View>
      <View style={styles.view3}>
      <TextInput style={styles.input1} placeholder="Enter Employee Id" autoCapitalize='none' autoCorrect={false}/>
      <TextInput style={styles.input1} placeholder="Password" 
      autoCapitalize='none' autoCorrect={false} secureTextEntry={true}
      />
      
      <TextInput style={styles.input1} placeholder="Enter OTP"/>  
      </View>
      <View style={styles.button1} >
        <Flatbuttonn text='Request OTP' onPress={()=>alert("OTP send to your number")}/>
      
      </View>
      <View style={styles.button2}>
        <Flatbutton text='LOGIN' onPress={()=>alert("Welcome")}/>
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
*/
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
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="login" component={loginScreen} />
        <Stack.Screen name="signup" component={Signupscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
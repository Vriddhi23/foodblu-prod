import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Button,
} from 'react-native';

export default class App extends React.Component{
  state={
    value: 0,
  }

  incrementValue=()=>{
    this.setState({
      value: this.state.value +1,
      
    })
  }
  
  decrementValue=()=>{
    this.setState({
      value: this.state.value -1,
      
    })
  }
  render(){
    return (
      <SafeAreaView>
          
            {/* <Text style={{fontSize:12, padding:20,color:'grey'}}></Text> */}
            <StatusBar style="auto"/>
            <View style={styles.Button}>
              <Button onPress={this.decrementValue} title="-"/>
              <Text> </Text>
              <Text style={{fontSize:20, marginBottom:-20}}>{this.state.value}</Text>
              <Text> </Text>
              <Button onPress={this.incrementValue} title="+"/>
            </View>
            </SafeAreaView>
          
      
    );
  }
 
  };



const styles = StyleSheet.create({
Button:{
    color:'#391593',
  marginTop:5,
  flexDirection:"row",
  justifyContent:'center',
  
}
});
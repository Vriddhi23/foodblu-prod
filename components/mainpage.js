import React from 'react'
import { SafeAreaView, StyleSheet, Text, View,Image, Button, TouchableOpacity,Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
//import  { NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import App from '../addtocart';


export default function mainscreen() {
  const Tab = createBottomTabNavigator ();
  return (
    
    <SafeAreaView>
      
      <ScrollView style={{backgroundColor:'#ffffff'}}>
        <View style={{alignItems:'center',marginTop:10}}>
        <Text style={styles.text2}>Today's Menu</Text>
        </View>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title styles={styles.title1}><Text style={{fontSize:20}}>Drinks</Text></DataTable.Title>
          <DataTable.Title styles={styles.title1}><Text style={{fontSize:20}}>Name</Text></DataTable.Title>
          <DataTable.Title styles={styles.title1}><Text style={{fontSize:20}}>Add to Cart</Text></DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.row1}>
        <Image style={styles.images} source={require('./tea1.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Tea</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App style={{marginTop:-30}}/><Text style={styles.text1}>10 Rs</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row1}>
        <Image style={styles.images} source={require('./coffee.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Coffee</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>15 Rs</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row  style={styles.row1}>
        <Image style={{width:100,height:155,position:'absolute',marginTop:-30,marginLeft:-5}} source={require('./coca.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Coca Cola</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>40 Rs</Text></DataTable.Cell>
        </DataTable.Row>
      
      </DataTable>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title styles={styles.title1}><Text style={{fontSize:20}}>Snacks</Text></DataTable.Title>
          <DataTable.Title styles={styles.title1}><Text style={{fontSize:20}}>Name</Text></DataTable.Title>
          <DataTable.Title styles={styles.title1}><Text style={{fontSize:20}}>Price</Text></DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.row1}>
        <Image style={styles.images1} source={require('./dabeli.jpg')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Dabeli</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>20 Rs</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row1}>
        <Image style={styles.images1} source={require('./vadapav.jpg')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Vadapav</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>30 Rs</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row  style={styles.row1}>
        <Image style={styles.images1} source={require('./puff.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Puff</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>20 Rs</Text></DataTable.Cell>
        </DataTable.Row>
       
      </DataTable>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader1}>
          <DataTable.Title styles={styles.title2}><Text style={{fontSize:20}}>Thali's</Text></DataTable.Title>
          <DataTable.Title styles={styles.title2}><Text style={{fontSize:20}}>Name</Text></DataTable.Title>
          <DataTable.Title styles={styles.title2}><Text style={{fontSize:20}}>Price</Text></DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.row2}>
        <Image style={styles.images2} source={require('./punjabi.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Punjabi</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>90 Rs</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row2}>
        <Image style={styles.images2} source={require('./gujarati.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>Gujarati</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>80 Rs</Text></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row  style={styles.row2}>
        <Image style={styles.images2} source={require('./south.png')}/><DataTable.Cell styles={styles.cell}></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><Text style={styles.text1}>South Indian</Text></DataTable.Cell>
          <DataTable.Cell styles={styles.cell}><App/><Text style={styles.text1}>80 Rs</Text></DataTable.Cell>
        </DataTable.Row>
       
      </DataTable>
      </ScrollView>
      </SafeAreaView>
    );
  };
  
const styles = StyleSheet.create({
    container: {
      padding: 35,
    },
    title1:{
      color:'#1E1E1E',
      fontSize:70,
   //   fontWeight:'bold',
    },
    images1:{
      width:100,
      height:100,
      position:'absolute',

    },
    row2:{
      marginBottom:30,
      height:180,
      flex:1,
      paddingHorizontal:2,
      paddingVertical:40,
     // height:70,
    },
    images2:{
      marginLeft:-10,
      margin:15,
      width:100,
      height:100,
      padding:10,
      position:'absolute',
    },
    title2:{
      maxWidth:100,
    },
    text2:{
      color:'#391593',
      fontSize:30,
      textDecorationLine:'underline',
      fontWeight:'bold',
    },
    row1:{
      marginBottom:30,
      height:180,
      flex:1,
      paddingHorizontal:2,
      paddingVertical:40,
     // height:70,
    },
    images:{
      width:90,
      height:100,
      position:'absolute',
      
    },
    cell:{
      height:200,
      margin:190,
      paddingHorizontal:20,
      paddingVertical:20,
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
      
    },
    tableHeader1:{
      backgroundColor: '#DCDCDC',
      alignItems:'center',
      //maxWidth:100,
    },
    text1:{
      fontSize:20,
      marginTop:-20,
    }
  });
 
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Products from '../../Products/products'

export default function home() {


   const navigation = useNavigation()
   const HandClick =()=>{}
  

 return (
   <View style={style.container}>
     <View style={style.Header} >
      <Header/>
      <Products/>
     </View >
   </View>
   );
 }
   
      
      
     
    
     

  const style = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
    },Text:{
      color:'#fff',
      alignSelf:'center',
      fontSize:15
    },btn:{
      backgroundColor:'#f00',
      marginBottom:-675,
      width:300,
      padding:15,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center',
    },
    Header:{
      flex:1,
      width:420,
      height:80
    },
    containerbtn:{
      backgroundColor:'#fff'
    }
    
  
  })
 
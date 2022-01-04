import React,{useState}from 'react';
import { View,Text,TextInput,StyleSheet } from 'react-native';

export default function src() {

  const [name,setName]= useState('')
 return (
   <View>
     <Text>Pesquise aqui!</Text>
     <TextInput
      style={style.Inout}
      value={name}
      onChangeText={text=>setName(text)}
     />
   </View>
  );
}
const style = StyleSheet.create({
  Inout:{
    borderWidth:2,
    borderColor:'#000',
    borderRadius:10,
    width:280,
    height:50,
    marginTop:-100,
    marginLeft:50,
    backgroundColor:'#fff',
    textAlign:'center'
    
    

  }
})
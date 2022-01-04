import React from 'react'
import { ImageBackground, View,Text,TextInput,StyleSheet } from 'react-native';
import styled from "styled-components/native";

const HeaderView = styled.View`
    height: 80px;
`;

const Bg = styled.ImageBackground`
    flex: 1;
`;

const image = require('../../pages/home/im00.jpg');





export default function Header() {
    return (
      <HeaderView>
         <Bg source={(image)} resizeMode="cover"/>
         <TextInput
            style={style.Inpout}
            placeholder='Pesquise Aqui'
            onChangeText={text=>setName(text)}
         />
      </HeaderView>
     );
   }

   
   
   
   const style = StyleSheet.create({
    Inpout:{
      borderWidth:1,
      borderColor:'#000',
      borderRadius:5,
      width:280,
      height:50,
      marginTop:-100,
      marginLeft:65,
      backgroundColor:'#fff',
      
      
      
  
    }
  })
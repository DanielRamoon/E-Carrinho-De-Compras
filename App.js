import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar, Text,View,StyleSheet, Image } from 'react-native';
import Routes from './src/router'
import mirage from './src/mirage';

export default function App(){
  mirage()
  return(
    
    <>
      <Routes/>
    </>
      )
    }
      
      
    
    


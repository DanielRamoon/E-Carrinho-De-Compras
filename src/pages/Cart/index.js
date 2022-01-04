import React from 'react';
import { View, Text, FlatList,ActivityIndicator,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react"
import { UseCart } from '../../components/Context/CartList';
import Btn from '../../components/Btn/btn';


export default function Products({Navigation}) {
    
    const {remove, cart,TotalValue,}= UseCart()

    const [Loading,SetLoading]= useState()
    const [products,SetProducts]= useState([])
  

    useEffect(
        ()=>{
            fetch('/api/products')
            .then((response) => response.json())
            .then((json) => SetProducts(json.products))
            .catch(()=>(alert('Erro ao carregar lista')))
            .finally(()=>SetLoading(false))
        },[]
    )


    
 return (
     
     
     <View style={style.container} >
        <View>
     <TouchableOpacity style={style.btnValor} >
        <Text style={style.txtValor} >VALOR: $ {TotalValue}</Text>
     </TouchableOpacity>
        </View>

     {
         Loading ? <ActivityIndicator/> :(
             <FlatList
             data={cart}
                keyExtractor={({id},imdex)=>id}
                renderItem={({index,item})=>(
                    <View style={style.list} >  
                  
                        <Image
                            source={{uri:item.image }}
                            style={style.avatar}
                            onPl={()=>Navigation.navigate()}
                            />  
                            <View style={style.info} >
                           
                                <Text style={style.disc} >{item.description} </Text>
                                <Text style={style.price} >{item.price}</Text>
                                <Text style={style.date} >{item.date}</Text>
                                <TouchableOpacity onPress={()=> remove(index)} >
                                    <Text style={style.TxtRomove} >Remover {remove}</Text>
                                </TouchableOpacity>
                                <Btn/>
                                    
                             </View>
                        </View>
                             )}
                             />
                             )
                            }

                    <TouchableOpacity style={style.btnFinal} >
                        <Text style={style.txtFinal} >FINALIZAR COMPRA</Text>
                    </TouchableOpacity>
                </View>
                       
            );
                          
        }
                          
      
                           


    const style = StyleSheet.create({
       
      container:{
          backgroundColor:'#fff',
          marginTop:10,
          height:450,
          flex:1
          
      },
      list:{
          flexDirection:'row',
          borderBottomColor:'#ccc',
          borderWidth:1,
          flex:1,
          padding:10, 
          
      },
      avatar:{
         width:50,
         height:100,
         backgroundColor:'#F00',
         borderColor:'#272727',
         marginTop:10,
         marginLeft:30,
         resizeMode:"cover",

      },info:{
          flexDirection:'column',
          justifyContent:'flex-end',
          marginBottom:20,
          marginLeft:40,
          marginTop:20
      },disc:{
          fontSize:25
      },
      price:{
          fontSize:14,
          fontWeight:'bold',
          color:'red'
      },
      date:{
          fontSize:12
      
      },
      btnValor:{
        backgroundColor:'#f00',
        width:120,
        marginLeft:240,
        marginBottom:10,
        padding:15,
        borderRadius:5,
        
      },
      txtValor:{
        color:'#fff',
        textAlign:'center',
        fontSize:12
      
      },
      btnFinal:{
          backgroundColor:'#006400',
          width:300,
          padding:10,
          margin:50,
          marginBottom:10,
          alignItems:'center'
      },
      txtFinal:{
          color:'#fff'
      },
      TxtRomove:{
          color:'#f00',
          fontSize:10
      }
     
    
  })
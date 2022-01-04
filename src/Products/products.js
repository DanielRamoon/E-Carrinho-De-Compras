import React from 'react';
import { View, Text, FlatList,ActivityIndicator,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react"
import { UseCart } from '../components/Context/CartList';


export default function Products({Navigation}) {

    const {add}= UseCart()

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

        const [List, SetList]=useState(products)
    
 return (
     
     
     <View style={style.container} >
     {
           Loading ? <ActivityIndicator/> :(
               <FlatList
                data={products}
                keyExtractor={({id},imdex)=>id}
                renderItem={({item})=>(
                    <View style={style.list} >  
                  
                        <Image
                            source={{uri:item.image }}
                            style={style.avatar}
                            onPl={()=>Navigation.navigate()}
                            />  
                            
                           

                      
                       
                        <View style={style.info} >
                            <Text style={style.disc} >{item.description}</Text>
                            <Text style={style.price} >{item.price}</Text>
                            <Text style={style.date} >{item.date}</Text>
                         </View>
                         <View style={style.btnAdd}>
                             <TouchableOpacity onPress={()=> add(item)}  >
                                 <Text style={style.txtadd} >Adicionar</Text>
                             </TouchableOpacity>
                         </View>
                            
                    </View>
                 )}
             />
                      )
     }
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
       
        btnAdd:{
            flex:1,
            width:30,
            marginLeft:-30
            

        },
        txtadd:{
            color:'#f00'
        }
      
    })
        
        
           
          
    
        
        
          
          
        
     
        
        
      
        
        
                      
         
         
         
          
          
          
          
          
                           
                      
                    
       
     

                          

                          
                          
                    

           
                   

                        

                          

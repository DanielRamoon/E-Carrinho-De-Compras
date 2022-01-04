import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Home from '../src/pages/home'
import Cart from './pages/Cart'       
import CartProvider from './components/Context/CartList';
import { View,Text,StyleSheet } from 'react-native';
import { UseCart } from './components/Context/CartList';

const Tab = createBottomTabNavigator();



export default function App(){
    return(
        
        <CartProvider>
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen
                    name='Home'
                    component={Home} 
                    />
                     <Tab.Screen
                        name='Sua Lista'
                        component={Cart}
                        options={{tabBarIcon: Icon}}
                        
                    />
                </Tab.Navigator>
            </NavigationContainer>
    
            </CartProvider>
        )
    }

       // Add numero de itens co cariinho
        function Icon(){
            const {cart}=UseCart()
            return(
                <View style={style.tab}>
                    <Text style={style.Text} >{Object.keys(cart).length}</Text>
                </View>
            )
        }
    
    
    const style = StyleSheet.create({
    tab:{
        width:24,
        height:24,
        margin:5
    },
    Text:{
        color:'#f00',
        fontSize:20
    }
    })
                   
                    
                  
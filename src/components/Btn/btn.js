import React, {useState} from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

/*const [OrdenItem , setOndemItem] =useState([])

function editeOrder(action,menuId,price) {
    let orderList= orderList.slice()
    let item = orderList.filter(a=>a.menuId==menuId)
    
    if(action=='+'){
        if(item.length>0){
            let newQty = item[0].qty +1
            item[0].qty=newQty
            item[0].total = item[0].qty* price
        }else{
            const newItem ={
                menuId: menuId, 
                qty:1,
                price:price,
                total:price 
            }
            orderList.push(newItem)
        }
        setOndemItem(orderList)
    }else{
        if(item.length>0){
            if(item[0]?.qty>0){
                let newQty = item[0].qty-1 
                itwm[0].qty=newQty
                item[0].total=newQty
            }
        }
    } setOndemItem(orderList)
}
function getOrderQty(menuId){
    let orderItem = orderItem.filter(a=>a.menuId==menuId)
    if(orderItem.length>0){
        return orderItem[0].qty
    }
}*/

export default function Btn() {
 return (
<View style={style.container} >
    <TouchableOpacity style={style.btn1}  >
        <Text>-</Text>
    </TouchableOpacity>
    <View>
        <TouchableOpacity style={style.btn2} >
            <Text>
            5
            </Text>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={style.Btn3}  >
        <Text>+</Text>
    </TouchableOpacity>
        

</View>
    
  );
}

const style = StyleSheet.create({
    container:{
        position:'absolute',
        justifyContent:'center',
        flexDirection:'row',
        height:30,
        bottom:-40,
        marginBottom:10
    },
    btn1:{
        width:30,
        backgroundColor:'#dedede',
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25
    },
    btn2:{
        width:30,
        height:30,
        backgroundColor:'#dedede',
        alignItems:'center',
        justifyContent:'center'
    },
    Btn3:{
        width:30,
        backgroundColor:'#dedede',
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:25,
        borderBottomRightRadius:25
    }
})
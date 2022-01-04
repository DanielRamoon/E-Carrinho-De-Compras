import React, {createContext, useState, useContext, useEffect} from 'react';

 

const cartContext = createContext()  

export default function CartProvider({children}) {
    
    const [cart,SetCart]= useState([])
    const [TotalValue,SetTotalValue]= useState()

    //Atualizar o campo do preço 
    useEffect(()=>{
        let value = 0
      cart.map((item)=>{
        value = value + item.price
      })

        SetTotalValue(value)
    },[cart]) 
    
    // Aparecer os item na tela do carrinho ao clicar
    function add(item){
        const newcart = cart
        newcart.push(item)
        
      
        SetCart([...newcart])
    }
    // Remover o item do carrinho 
    function remove(index) {
        let newCart = cart.filter((item,i)=> i !==index )
       
        SetCart([...newCart])
    } 
    
  

 
    const store={
        add,
        cart,
        TotalValue,
        remove,
        

    }   

    return(
      <cartContext.Provider value={store}>
          {children}
      </cartContext.Provider>
    ) 

}

export function UseCart(){
    const context = useContext(cartContext)
   
    const {
        add,cart,TotalValue,remove
    }= context

    return{
             
        cart,
        add,
        TotalValue,
        remove,
        
    }
    
}
import  React,{ createContext, useEffect } from 'react'
import { foodList } from '../constants'

export const StoreContext = createContext(null)

export default function StoreContextProvider(props){

    
    const [cartItems, setCartItem] = React.useState({});

    function addToCart(itemId){
        if(!cartItems[itemId]){
            setCartItem(prev => ({...prev, [itemId]:1}))
        }
        else{
            setCartItem(prev => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    function removeFromCart(itemId){
        setCartItem(prev => ({...prev, [itemId]:prev[itemId]-1}))
    }

    function getTotalCartAmount(){
        let totalAmount = 0;
        for(const menuCart in cartItems){
            if (cartItems[menuCart]>0){
                let menuInfo = foodList.find((menu) => menu.id === menuCart);
                totalAmount += menuInfo.price* cartItems[menuCart];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        foodList,
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


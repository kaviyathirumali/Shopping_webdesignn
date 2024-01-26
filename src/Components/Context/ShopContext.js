import React, {createContext, useState} from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);
// export const ShopContext = createContext({all_product:[], cartItem:{}});
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const[cartItem, setCartItem]=useState(getDefaultCart());
    const handleAddToCart =(productId)=>{
        setCartItem((prevCart)=>({...prevCart, [productId]:prevCart[productId]+1}));
        console.log(cartItem)
    }
    const handleDeleteToCart =(itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
          if (cartItem[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalAmount += itemInfo.new_price * cartItem[item];
            }
          }
        }
        return totalAmount;
      };
      const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItem) {
          if (cartItem[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            if (itemInfo) {
              totalItem += cartItem[item];
            }
          }
        }
        return totalItem;
      };
    const contextValue={all_product,cartItem, handleAddToCart, handleDeleteToCart, getTotalCartAmount, getTotalCartItem}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
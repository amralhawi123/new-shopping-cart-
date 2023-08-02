import {createContext, useContext, useState, useEffect } from "react";
import ShopingCart from "../components/ShopingCart";

const ShopingcartContext = createContext({})

const ShopingCreateProvider =({children}) => {

   const initialCartItem = localStorage.getItem("shoping-cart")? JSON.parse(localStorage.getItem("shoping-cart")) : []
   const [isOpen, setIsOpen] = useState(false)
   const [cartItem, setCartItem] = useState(initialCartItem)

   useEffect(() => {
      localStorage.setItem("shoping-cart", JSON.stringify(cartItem))
   }, [cartItem])
   const opencart = () => {
      setIsOpen(true)
   }
   const closeCart = () => {
      setIsOpen(false)
   }
   const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity ,0)

   const getItemQuantity =(id) => {
      return cartItem.find((item) => item.id === id)?.quantity || 0;
   }

   const increasCartQuantity =(id) => {
      setCartItem((currntItems) => {
         if(currntItems.find((item) => item.id === id) == null){
            return [...currntItems, {id, quantity:1}];
         } else {
            return currntItems.map((item) => {
               if(item.id === id){
                  return {...item, quantity: item.quantity + 1};
               } else {
                  return item;
               }
            })
         }
      })
   }
   const decreasCartQuantity =(id) => {
      setCartItem((currntItems) => {
         if(currntItems.find((item) => item.id === id) == null){
            return currntItems.filter((item) => item.id !== id)
         } else {
            return currntItems.map((item) => {
               if(item.id === id){
                  return {...item, quantity: item.quantity - 1};
               } else {
                  return item;
               }
            })
         }
      })
   }

   const removeItemFromCart =(id) => {
      setCartItem((currntItems) => currntItems.filter((item) => item.id !== id))
   }

   return <ShopingcartContext.Provider 
   value={{
      cartItem, 
      getItemQuantity, 
      increasCartQuantity, 
      decreasCartQuantity, 
      removeItemFromCart,
      opencart,
      closeCart,
      cartQuantity,
      
      }}>
      {children}
      <ShopingCart isOpen={isOpen}/>
   </ShopingcartContext.Provider>
}

export default ShopingCreateProvider

export const useShopingCart =() => {
   return useContext(ShopingcartContext)
}
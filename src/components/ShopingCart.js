import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShopingCart } from '../context/shopingContext'
import CartItem from './CartItem'
import formatCurancy from './formatecurrancy'
import storeData from '../data/storeData.json' 
const ShopingCart = ({isOpen}) => {

   const {cartItem, closeCart}= useShopingCart()

  return (
      <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
         </Offcanvas.Header>
            <Offcanvas.Body>
               <Stack gap={3}>
               {
                  cartItem.map((item) => (
                     <CartItem key={item.id} {...item}/>
                  ))
               }
               <div className='fw-bold fs-5 ms-auto'>
                  Total {" : "}
               {
                  formatCurancy(
                     cartItem.reduce((total, cartitem)=> {
                        const item = storeData.find((i) => i.id === cartitem.id)
                        return total + (item?.price || 0) * cartitem.quantity
                     }, 0)
                  )
               }
               </div>
               </Stack>
            </Offcanvas.Body>
      </Offcanvas>
  )
}

export default ShopingCart

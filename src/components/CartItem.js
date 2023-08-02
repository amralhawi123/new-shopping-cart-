import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeData from '../data/storeData.json'
import formatCurancy from './formatecurrancy'
import { useShopingCart } from '../context/shopingContext'


const CartItem = ({id, quantity}) => {

   const {removeItemFromCart}= useShopingCart()

   const item = storeData.find((i) => i.id === id)
   if(item == null ) return null
   
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-item-center'>
      <img src={item.imgUrl} alt='cart-img'
      style={{width:"125px", height:"75px", objectFit:"cover"}}/>
      <div className='me-auto'>
         <div>
            {item.name} { " " }
            {
               quantity > 1 && (
                  <span className='text-muted' style={{fontSize:"0.65rem"}}>x{quantity}</span>
               )
            }
         <div className='text-muted' style={{fontSize:"0.75rem"}}>
            {formatCurancy(item.price)}
         </div>
         </div>
      </div>
         <div>{formatCurancy(item.price * quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={() => removeItemFromCart(id)}>
         &times;
      </Button>
    </Stack>
  )
}

export default CartItem

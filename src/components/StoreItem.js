import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurancy from "./formatecurrancy"
import { useShopingCart } from '../context/shopingContext'
const StoreItem = ({id, name, imgUrl,price}) => {
 
   const {getItemQuantity, increasCartQuantity, decreasCartQuantity, removeItemFromCart}= useShopingCart()

   const quantity =getItemQuantity(id);
  return <Card className='h-100'>
         <Card.Img src={imgUrl} variant="top" style={{height:"200px", objectFit:"cover"}}/>
         <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline'>
               <span className='fs-2'>{name}</span>
               <span className='text-muted me-2'>{formatCurancy(price)}</span>
            </Card.Title>
            <div className='mt-auto'>
               {quantity === 0 ? (<Button className='w-100' onClick={() => increasCartQuantity(id)}>Add To cart</Button>) : (
                  <div className='d-flex flex-column align-items-center' style={{gap:"0.5rem"}}>
                     <div className='d-flex justify-content-center align-items-center' style={{gap:"0.5rem"}}>
                        <Button onClick={() => decreasCartQuantity(id)}>-</Button>
                        <span className='fs-3'>{quantity} in cart</span>
                        <Button onClick={() => increasCartQuantity(id)}>+</Button>
                     </div>
                     <Button variant='danger' size='sm' onClick={() => removeItemFromCart(id)}>Remove</Button>
                  </div>
               )}
            </div>
         </Card.Body>
      </Card>

}

export default StoreItem

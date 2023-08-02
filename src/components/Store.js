import React from 'react'
import storData from "../data/storeData.json"
import { Col, Row } from 'react-bootstrap'
import StoreItem from './StoreItem'

const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className='g-3'>
      {
        storData.length >= 1 ? (
          storData.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item}/>
            </Col>
          )
        ) ): (<h1>لا يوجد منتجات</h1>)
      }
    </Row>
    </>
  )
}

export default Store

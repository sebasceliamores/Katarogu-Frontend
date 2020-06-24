import React, { Fragment } from 'react'
import { Card, Card_Img, Card_Description, Button } from './styles'

export const CardExtern = () =>{
  return(
    <Fragment>
      <Card >
          <Card_Img >
            <img src="src/images/pantalon.jpg" alt="Pantalon"/>
          </Card_Img>
          <Card_Description >
            <h4>Pantalon</h4>
            <h5>$ 10.50</h5>
            <Button to={'/katarogu/product'} >Me interesa</Button>
          </Card_Description>
        </Card>  
    </Fragment>
  )
}
import React from 'react'
import { Link } from '@reach/router'

import { Card, Header, HeaderLeft, HeaderRight, Center, Image,P,Button } from './styles'

export const CardIntern = (props) => {
  return(
    <Card >
  
    <Header>

      <HeaderLeft>
        <h3>Nombre</h3>
        <h4>Prod-001</h4>
      </HeaderLeft>

      <HeaderRight>
        <h3>$10,50</h3>
      </HeaderRight>

    </Header>

    <Center>
    <Link to={'editProduct'}>
      <Image src='./src/images/pantalon.jpg '/>
      <P>Pantalon Jean en venta aproveche lleve lleve solo quedan pocos son buenos son bonitos son baratos</P>
    </Link>
    </Center>

    <div className="footer">
      <Button onClick ={props.onClick} >Eliminar este producto</Button>
    </div>

  </Card>
  )
}

import React, { Fragment, useEffect, useState } from 'react'
import { Header, Toggle, Container, Form, FormHeader,PaypalContent,Button,Input,
          CardContent,CardData,FormCard,FormPaypal,Description,DescriptionText} from './styles/Payment'


export const Payment = () => {
  const [card, useCard]= useState(false);
  const [paypal, usePaypal]= useState(false);
  const [change, useChange]= useState(false);


  useEffect(()=>{
    document.title ='Katarogu / Metodos de Pago'
  }, [])

  const handlerClick = ()=>{
    if(card){
      useCard(false);
      usePaypal(false);
      useChange(false)
    }else{
      useCard(true);
      usePaypal(true);
      useChange(true)
    }
  }

  return(
    <Fragment>

    <Header>
    <span>Katarogu</span>
    </Header>

    <Toggle >
      <label>Tarjeta</label>
      <div >
        <input onClick={handlerClick} type="checkbox" id='toggleSwitch'/>
      </div>
      <label >PayPal</label>
    </Toggle>

    <Container change={change}>
    <Form >

      <FormHeader > 
        <p >Catalogo <br/> <strong>Nombre Empresa</strong></p>
        <label ><strong>$5</strong></label>
      </FormHeader>
      <FormCard  visible = {card}>
        <CardContent > 
          <Input type="text" placeholder="Nombre titular de la tarjeta" />
          <Input type="password" placeholder="Número de tarjeta" />
          <CardData >
            <Input type="text"  placeholder="MM"/>
            <Input type="text"  placeholder="AA"/>
            <Input type="text"  placeholder="CVC"/>
          </CardData>
          <Button>Pagar</Button>
        </CardContent>
      </FormCard>

      <FormPaypal visible={paypal}>
        <PaypalContent  >
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Contraseña" />
          <Input type="text" placeholder="Nombre de tienda" />
          <Button>Pagar</Button>
        </PaypalContent>
      </FormPaypal>
    </Form>

    <Description >
      <DescriptionText >
        <p >
          Pago 100% seguro, tus datos de pago no serán guardados en nuestra base de datos.
        </p>
      </DescriptionText>

    </Description> 

  </Container>

    </Fragment>
  )
}
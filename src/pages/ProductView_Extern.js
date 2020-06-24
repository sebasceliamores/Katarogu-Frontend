import React from 'react'
import { Container, Header, HeaderBack, HeaderName, HeaderPrice, Product,
        ProductImages,BigImage,SmallImage, Description, Footer,
        FooterLeft,FooterRight} from './styles/ProductView_Extern'



export const ProductView_Extern = () => {
  return(
    <Container >

    <Header >
      <HeaderBack to={'../'} >
        <img src="../src/images/Flecha.svg" alt=""/>
      </HeaderBack>
      <HeaderName >
        <p>Pantalon</p>
      </HeaderName>
      <HeaderPrice >
        <p>$ 10.50</p>
      </HeaderPrice>
    </Header>


    <Product >

      <ProductImages>

        <BigImage >
          <img src="../src/images/pantalon.jpg" alt=""/>
        </BigImage>

        <SmallImage >
        {
          [1,2,3,4,5,6].map(item => <img key ={item} src="../src/images/pantalon.jpg" alt=""/>)
        }
        </SmallImage>

      </ProductImages>

      <Description >
        <h3>Nunc facilisis consequat elit, eu congue tortor sollicitudi
          Nunc facilisis consequat elit, eu congue tortor sollicitudi
          Nunc facilisis consequat elit, eu congue tortor sollicitudi
          Nunc facilisis consequat elit, eu congue tortor sollicitudi
          Nunc facilisis consequat elit, eu congue tortor sollicitudi
          Nunc facilisis consequat elit, eu congue tortor sollicitudi
          Nunc facilisis consequat elit, eu congue tortor sollicitudi</h3>
      </Description>
    </Product>

    <Footer >
      <FooterLeft>
        <h2>KATAROGU</h2>
        <h4>Servicio de catálogos en línea</h4>
      </FooterLeft>
      <FooterRight>
        <h3>Información aquí</h3>
        <h3>095 974 6048</h3>
      </FooterRight>
    </Footer>

  </Container>
  )
}

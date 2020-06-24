import React from 'react'

import { ImageContainer_Img} from '../components/ImageContainer_Img'
import { Link } from '@reach/router'
import {Container, Header, HeaderMenu,HeaderMenuProfile,Nav,Button,Input,
        TextArea, Product,ProductStart, ButtonCancel, ProductImage, FileUpload,
        ImageContainer} from './styles/Edit_Product'

export const Edit_Product = () => {
  return(
    <Container >
    <Header >
      <span>NombreTienda</span>
      <HeaderMenu >
        <HeaderMenuProfile >
          <img src="../src/images/ajustes.svg" alt="Ajustes"/>
        </HeaderMenuProfile>
        <Nav>
          <li><Link to={'/editInformation'}>Editar información</Link></li>
          <li> <Link to={'changePassword'}> Cambiar contraseña</Link></li>
        </Nav>
      </HeaderMenu>
    </Header>

    <Product>

      <ProductStart id="" >
        <Input type="text"  placeholder="Nombre" />
        <Input type="text"  placeholder="Precio" />
        <TextArea   placeholder="Descripción" ></TextArea>
        <Button >Guardar</Button>
        <ButtonCancel >Cancelar</ButtonCancel>
      </ProductStart>

      <ProductImage id="">

        <FileUpload >
          <label htmlFor="file-upload" >Subir Imagen</label>
          <input   id="file-upload" type="file" formEncType="multipart/form-data"></input>
        </FileUpload>
        
        <ImageContainer >
        {
        [1,2,3,4,5,6].map(item => <ImageContainer_Img key ={item} />)
        }
        </ImageContainer> 

        <p>La imagen seleccionada será la imagen principal del producto</p>

      </ProductImage> 
    </Product>

  </Container>
  )
}
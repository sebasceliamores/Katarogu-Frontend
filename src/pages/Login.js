import React, { Fragment, useState } from "react";
import { Header, Toggle, Container, Form, FormLogin, DescriptionText,
        FormRegister,Button,Input,Description} from './styles/Login'

export const Login = () => {
  const [login, useLogin] = useState(false);
  const [register, useRegister] = useState(false);
  const [change, useChange] = useState(false);
  

  const handlerClick = () => {
    if  (login){
      useLogin(false);
      useRegister(false);
      useChange(false);
    }else{
        useLogin(true);
        useRegister(true);
        useChange(true);
    }
  }

	return (
		<Fragment>
			<Header>Katarogu</Header>

			<Toggle >
				<label>Entrar</label>
				<div >
					<input onClick={handlerClick} type="checkbox" id="toggleSwitch" />
				</div>
				<label>Registrar</label>
			</Toggle>

			<Container change={change}>
				<Form  >
					<FormLogin  active={login}>
						<Input  type="text" placeholder="Usuario" />
						<Input  type="password" placeholder="Contraseña" />
						<Button >Entrar</Button>
					</FormLogin>

					<FormRegister  active={register}>
						<Input  type="email" placeholder="Email" />
						<Input  type="password" placeholder="Contraseña" />
						<Input  type="text" placeholder="Nombre de tienda" />
						<Button >Registrar</Button>
					</FormRegister>
				</Form>

				<Description id="description">
					<DescriptionText >
						ShopX, crea tu catalogo de forma fácil y sencilla, promociona tus
						productos con un gran alcance a todos tus clientes.
					</DescriptionText>
				</Description>
			</Container>
		</Fragment>
	);
};

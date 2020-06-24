import React, { Fragment } from "react";
import { Header, Message, Container, Container1, Container2, Input,
        ContainerButton,ContainerButton1,ContainerButton2, Button, ButtonCancel} from "./styles/ChangePassword";

export const ChangePassword = () => {
	return (
		<Fragment>
			<Header>
				<span>NombreTienda</span>
				<img src="src/images/ajustes.svg" alt="Ajustes" />
			</Header>

			<Message>
				<span class="message__info">Cambia tu contraseña</span>
			</Message>

			<Container>
				<Container1>
					<Input class="input" type="tex" placeholder="Contraseña actual" />
				</Container1>
				<Container2>
					<Input type="text" class="input" placeholder="Nueva contraseña" />
					<Input
						type="text"
						class="input"
						placeholder="Repetir nueva contraseña"
					/>
				</Container2>
			</Container>

			<ContainerButton >
				<ContainerButton1 >
					<Button class="button">Guardar</Button>
				</ContainerButton1>
				<ContainerButton2 >
					<ButtonCancel class="button button2">Cancelar</ButtonCancel>
				</ContainerButton2>
			</ContainerButton>
		</Fragment>
	);
};

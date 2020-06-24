import React from "react";
import { ListOfCardExtern } from "../components/ListOfCardExtern";
import { Container, Header, HeaderName, HeaderInformation, ContactUs, Product, Address,
        Footer, FooterLeft, FooterRight } from "./styles/KataroguExtern";

export const KataroguExtern = () => {
	return (
			<Container >
      
				<Header >
					<HeaderName >
						<h1>Nombre de la Tienda</h1>
						<h5>FRASE CORTA SLOGAN</h5>
					</HeaderName>

					<HeaderInformation >
						<ContactUs >
							Contáctanos: <span>095 975 4956</span>
						</ContactUs>
						<h4>Estamos atendiendo parcialmente en nuestro local</h4>
						<h3>9 AM - 2 PM</h3>
					</HeaderInformation>
				</Header>

				<Product >
					<Address >
						<h4>Calle 1 - Calle 2</h4>
					</Address>
					<ListOfCardExtern />
				</Product>

				<Footer >
					<FooterLeft >
						<h2>KATAROGU</h2>
						<h4>Servicio de catálogos en línea</h4>
					</FooterLeft>
					<FooterRight>
						<h3>Información aquí</h3>
						<h3>095 974 6048</h3>
					</FooterRight>
				</Footer>
			</Container>
	);
};

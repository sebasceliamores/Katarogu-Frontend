import React, { Fragment, useState } from "react";
import { Link } from "@reach/router";
import { ListOfCardIntern } from "../components/ListOfCardIntern";
import { ImageContainer_Img } from "../components/ImageContainer_Img";
import {
	Container,
	Header,
	HeaderMenu,
	HeaderMenuProfile,
	Nav,
	NewProduct,
	NewProduct_Button,
	Button,
	Input,
	NewProductCenter,
	InputName,
	InputPrice,
	TextArea,
	ButtonSave,
	ButtonCancel,
	NewProductImage,
	FileUpload,
	ImageContainer,
	InputFile,
} from "./styles/KataroguIntern";

export const KataroguIntern = () => {
	const [none, setNone] = useState(true);

	const handlerClick = (event) => {
		if (none) {
			setNone(false);
		} else {
			setNone(true);
		}
	};

	return (
		<Fragment>
			<Container>
				<Header>
					<span>NombreTienda</span>
					<HeaderMenu>
						<HeaderMenuProfile>
							<img src="src/images/ajustes.svg" alt="Ajustes" />
						</HeaderMenuProfile>
						<Nav>
							<li>
								<Link to={"/editInformation"}>Editar información</Link>
							</li>
							<li>
								{" "}
								<Link to={"changePassword"}> Cambiar contraseña</Link>
							</li>
						</Nav>
					</HeaderMenu>
				</Header>

				<NewProduct>
					<NewProduct_Button>
						<Button onClick={handlerClick} id="newProduct__button">
							Nuevo Producto
						</Button>
					</NewProduct_Button>

					<NewProductCenter none={none} id="newProduct__center">
						<InputName type="text" placeholder="Nombre" />
						<InputPrice type="text" placeholder="Precio" />
						<TextArea placeholder="Descripción"></TextArea>
						<ButtonSave>Guardar</ButtonSave>
						<ButtonCancel>Cancelar</ButtonCancel>
					</NewProductCenter>

					<NewProductImage none={none} id="newProduct__image">
						<FileUpload>
							<label htmlFor="file-upload">Subir Imagen</label>
							<InputFile
								id="file-upload"
								type="file"
								formenctype="multipart/form-data"
							></InputFile>
						</FileUpload>

						<ImageContainer>
							{[1, 2, 3, 4, 5, 6].map((item) => (
								<ImageContainer_Img key={item} />
							))}
						</ImageContainer>

						<p>La imagen seleccionada será la imagen principal del producto</p>
					</NewProductImage>
				</NewProduct>

				<section className="product">
					<div className="product__startText">
						<h2>Mis productos</h2>
					</div>

					<div className="product-view">
						<ListOfCardIntern />
					</div>
				</section>
			</Container>
		</Fragment>
	);
};

import React from "react";
import { Container_Img, Img, Label } from './styles'

export const ImageContainer_Img = () => {
	return (
		<Container_Img>
			<Img src="../src/images/pantalon.jpg" alt="Producto" />
			<Label htmlFor="">X</Label>
		</Container_Img>
	);
};

import styled from "styled-components";
import { Link } from "@reach/router";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
`;
export const Header = styled.section`
	height: 80px;
	display: grid;
	background-color: #565656;
	color: white;
	grid-template-columns: 15% 1fr 15%;
	justify-items: center;
	align-items: center;
	& p {
		text-align: center;
		margin: 0;
		font-size: 200%;
	}
	@media screen and (max-width: 480px) {
		height: 80px;
		grid-template-columns: 18% 1fr 18%;
	}
`;
export const HeaderBack = styled(Link)`
	display: flex;
	justify-content: center;

	& img {
		width: 20%;
		cursor: pointer;
	}
`;
export const HeaderName = styled.div`
	width: 100%;
	border-left: 1px solid #ffffff;
	border-right: 1px solid #ffffff;
	color: #04bf8a;
	font-weight: bold;
	& p {
		@media screen and (max-width: 480px) {
			font-size: 150%;
		}
	}
`;
export const HeaderPrice = styled.div`
	& p {
		font-size: 110%;
	}
`;
export const Product = styled.section`
	display: grid;
	justify-items: center;
	align-items: center;
`;
export const ProductImages = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-areas: "left right";
	justify-content: center;
	align-items: center;
	width: 100%;
	border-bottom: 2px dashed #565656;
	padding: 40px 0px;
	@media screen and (max-width: 480px) {
		grid-template-areas:
			"left left"
			"right right";
	}
`;
export const BigImage = styled.div`
	grid-area: left;
	display: flex;
  justify-content: center;
	& img {
		border-radius: 18px;
		border: 3px solid #04bf8a;
		width: 60%;
		height: 60%;
		background-size: cover;
	}
`;
export const SmallImage = styled.div`
	grid-area: right;
	justify-self: center;

	width: 90%;
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	& img {
		width: 70px;
		height: 70px;
		background-size: cover;
		margin: 15px;
		border: 1.7px solid #565656;
		border-radius: 5px;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		height: 90%;
	}
`;
export const Description = styled.div`
	margin: 40px 0px;
	width: 60%;
	font-size: 150%;
	text-align: center;
	@media screen and (max-width: 768px) {
		width: 80%;
	}
	@media screen and (max-width: 480px) {
		font-size: 100%;
	}
`;
export const Footer = styled.section`
	box-sizing: border-box;
	display: grid;
	background-color: #04bf8a;
	color: #ffffff;
	grid-template-columns: 1fr 1fr;
	font-size: 90%;
	@media screen and (max-width: 480px) {
		font-size: 70%;
	}
`;
export const FooterLeft = styled.div`
	justify-self: left;
	padding-left: 4%;
	text-align: center;
	& h2 {
		height: 25px;
	}
`;
export const FooterRight = styled.div`
	justify-self: right;
	font-size: 90%;
	padding-right: 11%;
	text-align: center;
`;

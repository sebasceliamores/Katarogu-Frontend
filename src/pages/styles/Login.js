import styled, { css } from "styled-components";

export const Header = styled.header`
	width: auto;
	background-color: #04bf8a;
	padding-left: 15px;
	color: white;
	font-weight: 800;
	font-size: 50px;
	border-radius: 0px 0px 10px 10px;
	border-bottom: 5px solid #07976e;
`;
export const Toggle = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 40px;
	width: 100%;
	& label {
		padding: 0px 10px;
		font-weight: 600;
		font-size: 20px;
	}
	& input {
		position: relative;
		width: 200px;
		height: 50px;
		background: #ffff;
		-webkit-appearance: none;
		border-radius: 10px;
		outline: none;
		transition: 0.4s;
		cursor: pointer;
		@media screen and (max-width: 480px) {
			width: 100px;
			height: 50px;
		}
		&:checked {
			background-color: #ffffff;
			&::before {
				left: 100px;
				@media screen and (max-width: 480px) {
					left: 50px;
				}
			}
		}

		&::before {
			z-index: 2;
			position: absolute;
			content: "";
			left: 0;
			width: 100px;
			height: 46px;
			background: #04bf8a;
			border-radius: 10px;
			border-bottom: 4px solid #07976e;
			transform: scale(1);
			transition: 0.4s;
			@media screen and (max-width: 480px) {
				width: 50px;
				height: 50px;
			}
		}
	}
`;
export const Container = styled.section`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	padding-top: 20px;
	${(props) =>
		props.change &&
		css`
			flex-direction: row-reverse;
		`}
`;
export const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	grid-area: forms;
`;
export const FormLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-top: 30px;
	${(props) =>
		props.active &&
		css`
    visibility:hidden;
    height:0;
  `}
`;
export const FormRegister = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
  visibility:hidden;
  height:0;
	${(props) =>
		props.active &&
		css`
    visibility: visible;
    height:auto;
  `}
`;
export const Input = styled.input`
	height: 50px;
	width: 95%;
	border-radius: 15px;
	font-family: "Baloo Bhai 2";
	color: #565656;
	font-size: 25px;
	outline: none;
	margin: none;
	border: none;
	margin-bottom: 15px;
	padding-left: 15px;
`;
export const Button = styled.button`
	background-color: #04bf8a;
	margin-top: 15px;
	width: 150px;
	height: 50px;
	border-radius: 15px;
	outline: none;
	font-family: "Baloo Bhai 2";
	color: #ffffff;
	font-size: 25px;
	border: none;
	border-bottom: 4px solid #07976e;
	cursor: pointer;
`;
export const Description = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: description;
	align-items: center;
`;
export const DescriptionText = styled.p`
	font-size: 25px;
	display: flex;
	text-align: center;
	margin: 0;
	width: 300px;
	padding-top: 30px;
`;

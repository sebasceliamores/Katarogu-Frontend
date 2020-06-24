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
	@media screen and (max-width: 320px) {
		font-size: 40px;
	}
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
export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-top: 20px;
	height: auto;
  width:100%;
	${(props) =>
		props.change &&
		css`
			flex-direction: row-reverse;
		`}

	@media screen and (max-width: 480px) {
		justify-content: center;
		${(props) =>
			props.change &&
			css`
				flex-direction: row;
			`}
	}
`;
export const Form = styled.div`
	width: 50%;
	@media screen and (max-width: 480px) {
		width: 100vw;
		border: none;
	}
`;
export const FormHeader = styled.div`
	background-color: #28aad9;
	width: 100%;
	height: 80px;
	font-family: "Baloo Bhai 2";
	color: #ffffff;
	border-bottom: 4px solid #157497;
	border-right: 1px solid #157497;
	display: flex;
	align-items: center;

	& p {
		width: 80%;
		font-size: 20px;
		margin: 0;
		padding-left: 15px;

		& br {
			font-size: 25px;
		}
	}

	& label {
		font-size: 25px;
	}

	@media screen and (max-width: 480px) {
		width: 100%;
		padding: 0px;
		height: 80px;
		border-right: none;
		border-left: none;
	}
	@media screen and (max-width: 320px) {
		padding: 0px;
		height: 80px;
		border-right: none;
		border-left: none;
	}
`;
export const FormCard = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border-right: #565656 dashed 1px;
	height: 100%;
	@media screen and (max-width: 480px) {
		width: 99%;
		padding: 0;
		border: none;
	}
	@media screen and (max-width: 320px) {
		height: auto;
    ${(props) =>
		props.visible &&
		css`
			visibility: hidden;
			height: 0;
		`}
	}

	${(props) =>
		props.visible &&
		css`
			visibility: hidden;
			height: 0;
		`}
`;
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
`;
export const CardData = styled.div`
	width: 70%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;

	& Input {
		height: 50px;
		width: 60px;
		border-radius: 15px;
		font-family: "Baloo Bhai 2";
		color: #565656;
		font-size: 20px;
		outline: none;
		border: none;
		margin-top: 60px;
		text-align: center;
		@media screen and (max-width: 768px) {
			font-size: 16px;
		}
		@media screen and (max-width: 320px) {
			font-size: 15px;
		}
	}
`;
export const FormPaypal = styled.form`
	visibility: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	border-left: #565656 dashed 1px;
	height: 0;
	@media screen and (max-width: 480px) {
		width: 99%;
		padding: 0;
		border: none;
	}
	@media screen and (max-width: 320px) {
		height: 0;
    ${(props) =>
		props.visible &&
		css`
			visibility: visible;
			height: auto;
		`}
	}
	${(props) =>
		props.visible &&
		css`
			visibility: visible;
			height: auto;
		`}
`;
export const PaypalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
export const Input = styled.input`
	height: 50px;
	width: 50%;
	border-radius: 15px;
	font-family: "Baloo Bhai 2";
	color: #565656;
	font-size: 20px;
	outline: none;
	border: none;
	margin-top: 60px;
	padding-left: 10px;
	@media screen and (max-width: 768px) {
		height: 50px;
		width: 50%;
		font-size: 16px;
	}
	@media screen and (max-width: 480px) {
		height: 50px;
		width: 50%;
		font-size: 18px;
	}
	@media screen and (max-width: 320px) {
		height: 60px;
		width: 50vw;
		font-size: 13px;
	}
`;
export const Button = styled.button`
	background-color: #04bf8a;
	margin-top: 60px;
	width: 150px;
	height: 50px;
	border-radius: 15px;
	outline: none;
	color: #ffffff;
	font-size: 25px;
	border: none;
	border-bottom: 4px solid #07976e;
	cursor: pointer;
`;
export const Description = styled.div`
	display: flex;
	flex-direction: column;
	width: 49%;
	align-items: center;
	@media screen and (max-width: 480px) {
		width: 100%;
		margin-top: 80px

	}
	@media screen and (max-width: 320px) {
		width: 100%;
		margin-top: 70px ;
	}
`;
export const DescriptionText = styled.div`
	font-size: 25px;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	margin: 0;
	width: 100%;
	height: 100%;

	& p {
		font-size: 25px;
		width: 50%;
		height: auto;
		margin: 0;
		@media screen and (max-width: 480px) {
			font-size: 20px;
			width: 90%;
			height: auto;
			margin: 0;
			align-items: center;
		}
		@media screen and (max-width: 320px) {
			font-size: 20px;
			width: 90%;
			height: auto;
			margin: 0;
			padding: 50px 0px;
			align-items: center;
		}
	}
`;

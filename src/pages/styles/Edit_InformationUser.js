import styled, { css } from "styled-components";
import { EntryTittle, EntryTittle2, EntryTittle3, EntryText, EntryText2 } from '../../styles/animation'


export const Header = styled.div`
	height: 80.8px;
	width: 100%;
	background-color: #04bf8a;
	color: white;
	font-weight: 800;
	font-size: 300%;
	border-radius: 0px 0px 10px 10px;
	border-bottom: 5px solid #07976e;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& span {
		padding-left: 15px;
	}
	& img {
		padding-right: 15px;
		cursor: pointer;
		color: #565656;
	}

	@media screen and (max-width: 768px) {
		font-size: 200%;
	}

	@media screen and (max-width: 480px) {
		font-size: 120%;
	}
	@media screen and (max-width: 320px) {
		font-size: 95%;
	}
`;
export const Input = styled.input`
	height: 50px;
	width: 40%;
	border-radius: 15px;
	color: #565656;
	font-size: 100%;
	outline: none;
	border: none;
	padding-left: 15px;
	${(props) =>
		props.visible &&
		css`
			visibility: hidden;
		`}
	@media screen and (max-width: 480px) {
		${(props) =>
			props.visible &&
			css`
				display: none;
			`}
	}
`;
export const Select = styled.select`
	height: 50px;
	width: 60%;
	border-radius: 15px;
	color: #565656;
	font-size: 100%;
	outline: none;
	border: none;
	margin: 10px;
	padding-left: 10px;
`;
export const Button = styled.button`
	background-color: #04bf8a;
	width: 100%;
	height: 60px;
	border-radius: 15px;
	outline: none;
	color: #ffffff;
	font-size: 25px;
	border: none;
	border-bottom: 4px solid #07976e;
	cursor: pointer;
`;

export const Container = styled.div`
	height: 100vh;
	box-sizing: border-box;
	display: grid;
	& img {
		width: 50px;
		@media screen and (max-width: 768px) {
			width: 40px;
		}
		@media screen and (max-width: 480px) {
			width: 35px;
		}
	}
  & h2{
    margin: 5px;
    margin-left: 23px;
    @media screen and (max-width: 480px) {
			text-align:center;
      margin-left: 0px;
		}
  }
`;
export const ContainerSocial = styled.section`
	border-bottom: 2px dashed #565656;
	display: grid;
	margin-top: 40px;
`;
export const ContainerSocial_WFI = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 40px;
	@media screen and (max-width: 480px) {
		flex-direction: column;
		& Input {
			width: 80%;
			margin: 20px 0px;
		}
	}
`;
export const ContainerMedium = styled(ContainerSocial)`
	border: 0;
`;
export const ContainerMedium_Info = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-left: 7.5%;
	& Input {
		width: 43%;
	}
	@media screen and (max-width: 480px) {
		padding: 0;
		flex-direction: column;
		& Input {
			width: 80%;
			margin: 20px 0;
		}
	}
`;
export const ContainerMedium_Check = styled.div`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 25px;
	margin-top: 40px;
	margin-left: 8%;
	& label,
	input {
		cursor: pointer;
		user-select: none;
		padding: 0 8px;
		margin-bottom: 20px;
	}
	& input {
		transform: scale(1.6);
	}
`;
export const ContainerStore = styled.section`
	box-sizing: border-box;
	margin: 40px 30px;
	display: grid;

	grid-template-areas: "1 2 3";
	${(props) =>
		props.none &&
		css`
			display: none;
		`}
	@media screen and (max-width: 768px) {
		grid-template-areas:
			"1 "
			"2 "
			"3";
	}
`;

export const Direction = styled.div`
	display: flex;
	flex-direction: column;
	& Input {
		margin: 20px 0;
		width: 90%;
	}
`;
export const Attention = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	& h2 {
		text-align: center;
	}
`;
export const Attention_Div = styled.div`
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 80%;
	gap: 10px;
	& h3 {
		margin-top: 40px;
	}
	& Select {
		margin: 0;
		width: 95%;
		@media screen and (max-width: 768px) {
			width: 100%;
			font-size: 75%;
		}
	}
	${(props) =>
		props.visible &&
		css`
			visibility: hidden;
		`}
`;
export const Schedule = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	text-align: center;
	${(props) =>
		props.visible &&
		css`
			visibility: hidden;
		`}

	& h3 {
		text-align: left;
		margin: 0 10px;
		margin-bottom: 9px;
	}
	& Select {
		font-size: 90%;
	}
	@media screen and (max-width: 768px) {
		& h2 {
			margin-left: 8.5px;
		}
	}
`;
export const ScheduleDate = styled.div`
	display: flex;
`;
export const ContainerButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
	& Button,
	ButtonDelete {
		width: 15%;
		margin: 0 20px;
		@media screen and (max-width: 488px) {
			width: 40%;
		}
	}
`;
export const ButtonDelete = styled(Button)`
	background-color: #bc1212;
	border-bottom: 4px solid #840909;
`;

export const Overlay = styled.div`
	background-color: rgb(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: stretch;
	visibility: hidden;

	${(props) =>
		props.active &&
		css`
			visibility: visible;
		`}
`;

export const Popup = styled.div`
	background-color: #ffffff;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
	border-radius: 15px;
	margin-top: 7%;
	padding-top: 20px;
	text-align: center;
	width: 80%;
	transition: 0.6s ease all;
	transform: scale(0.7);
	opacity: 0;
	position: relative;
	& div {
		display: flex;
		justify-content: stretch;
		align-items: flex-end;
	}
	& Button,
	ButtonDelete,
	ButtonSuspend {
		width: 33.33%;
		height: 40px;
		border-radius: 15px;
		font-size: 19px;

    @media screen and (max-width: 480px){
    width: 33.33%;
    height: 40px;
    font-size: 13px;
  }
	}
	${(props) =>
		props.active &&
		css`
			transform: scale(1);
			transform: translateY(20px);
			opacity: 1;

      & h3{
        opacity:0;
        animation: ${EntryTittle} .8s ease .5s forwards;
      }
      & h4{
        opacity:0;
        animation: ${EntryText} .8s ease .5s forwards;
      }
		`}

  @media screen and (max-width: 480px){
    width: 90%;
    & h3{
      font-size: 25px;
    }
    & h4{
      font-size: 15px;
    }
  }
`;
export const Popup2 = styled.div`
	background-color: #ffffff;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
	position: absolute;
	bottom: 50%;
	border-radius: 15px;
	padding-top: 20px;
	text-align: center;
	width: 80%;
	height: auto;
	transition: 0.3s ease all;
	transform: scale(0.7);
	opacity: 0;
	visibility: hidden;
    
    & h3{
      font-size: 36px;
  font-weight: 600;
  margin-top: 10px 0px;
  opacity: 0;
    }

	${(props) =>
		props.active &&
		css`
			animation: ${EntryTittle2} 0.6s ease 0.5s forwards;
      & h3{
        opacity:1;
      }
		`}
    @media screen and (max-width: 480px){
    width: 90%;
    & h3{
      font-size: 26px;
    }
  }
`;
export const Popup3 = styled.div`
	background-color: #ffffff;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
	border-radius: 15px;
	padding-top: 20px;
	text-align: center;
	width: 80%;
	height: auto;

	position: absolute;
	bottom: 50%;

	transition: 0.3s ease all;
	transform: scale(0.7);
	opacity: 0;
	visibility: hidden;
  & h3{
    font-size: 36px;
  font-weight: 600;
  margin-top: 10px 0px;
  opacity: 0;
  }
	${(props) =>
		props.active &&
		css`
			animation: ${EntryTittle3} 0.6s ease 0.5s forwards;
      & h3 {
        opacity:1;
      }
		`}

    @media screen and (max-width: 480px){
    width: 90%;
    & h3{
      font-size: 26px;
    }
  }
`;
export const ButtonSuspend = styled(Button)`
	background-color: #f8b327;
	border-bottom: 4px solid #e1a222;
`;

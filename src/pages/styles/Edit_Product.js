import styled from 'styled-components'
export const Button = styled.button`
  background-color: #04bf8a;
  width: 80%;
  height: 60px;
  border-radius: 15px;
  outline: none;
  color: #ffffff;
  font-size: 150%;
  border: none;
  border-bottom: 4px solid #07976e;
  cursor: pointer;
  @media screen and (max-width: 320px) {
  font-size: 100%;
	}
`;
export const ButtonCancel = styled(Button)`
  background-color: #BC1212;
  border-bottom: 4px solid #840909;
`
export const Input = styled.input`
	height: 50px;
	width: 90%;
	border-radius: 15px;
	color: #565656;
	font-size: 100%;
	outline: none;
	border: none;
	padding-left: 15px;
`;
export const TextArea = styled.textarea`
	grid-area: description;
	width: 96%;
	border-radius: 15px;
	color: #565656;
	outline: none;
	border: none;
	height: 90%;
	align-items: center;
	font-size: 17px;
	resize: none;
	padding: 0;
	padding: 6px;
	cursor: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}
	&::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: #ffffff;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #04bf8a;
	}
`;

export const Container = styled.div`
	display: gridM;
`;
export const Header = styled.div`
	height: 80.8px;
	width: 100%;
	background-color: #04bf8a;
	color: white;
	border-radius: 0px 0px 10px 10px;
	border-bottom: 5px solid #07976e;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& span {
		padding-left: 15px;
		font-size: 40px;
		@media screen and (max-width: 480px) {
			font-size: 150%;
		}
	}

	& img {
		cursor: pointer;
		color: #565656;
		width: 50px;
		@media screen and (max-width: 480px) {
			margin-top: 10px;
			width: 50px;
		}
		@media screen and (max-width: 320px) {
			width: 35px;
		}
	}
`;
export const HeaderMenu = styled.div`
	margin-right: 20px;
	&:hover {
		& ul {
			display: block;
		}
	}

	& li {
		margin: 10px 40px;

		@media screen and (max-width: 1024px) {
			margin: 0;
			margin-top: 6px;
			margin-left: 6px;
			width: 100%;
			font-size: 100%;
		}
		@media screen and (max-width: 768px) {
			margin: 0;
			margin-top: 6px;
			margin-left: 6px;
			width: 100%;
			font-size: 90%;
		}
		@media screen and (max-width: 480px) {
			.header__menu ul li {
				margin: 6px;
				width: 100%;
				font-size: 100%;
			}
		}
		@media screen and (max-width: 320px) {
			margin: 6px;
			width: 100%;
			font-size: 70%;
		}

		& a {
			color: #565656;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;
export const Nav = styled.ul`
	display: none;
	box-sizing: border-box;
	background-color: #ffffff;
	float: left;
	list-style: none;
	padding: 0px;
	position: absolute;
	width: 15%;
	text-align: left;
	margin: 0px 0px 0px -10.5%;
	border-radius: 15px;
	border: 4px solid #f0f0f0;

	@media screen and (max-width: 1024px) {
		width: 20%;
		margin: 0px 0px 0px -14%;
	}
	@media screen and (max-width: 768px) {
		width: 18.5%;
		margin: 0px 0px 0px -10%;
	}
	@media screen and (max-width: 480px) {
		width: 45%;
		height: auto;
		margin: 0px 0px 0px -31%;
	}
	@media screen and (max-width: 320px) {
		margin: 7px 0px 0px -21%;
		font-size: 100%;
	}
`;
export const HeaderMenuProfile = styled.div`
	margin-right: 8px;
	display: flex;
	align-items: center;

	& img {
		margin-right: 8px;
		width: 40px;
		height: 40px;
	}
`;

export const Product = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'start end';
  padding:40px;
  padding-top: 0;
  grid-row-gap: 40px;
  @media screen and (max-width: 480px) {
    grid-template-areas:  'start start' 
                          'end end';
	}
`
export const ProductStart = styled.div`
  grid-area: start;
  display: grid;
  align-items: center;
  justify-items: center;
  padding-top: 10px;
  margin-top: 8px;
  height: 100%;
  gap: 10px;
  grid-template-rows: repeat(3, 150px);
  grid-template-columns: repeat(2,1fr);
  grid-template-areas:  'name price'
                        'description description'
                        'save cancel';
  transition: 1s ease all;
`
export const ProductImage = styled.div`
  height: 100%;
  grid-area: end;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 1s ease all;
  text-align:center;
`

export const FileUpload = styled.div `
  & label {
    display: block;
  text-align: center;

  background-color: #04bf8a;
  width: 200px;
  height: 40px;
  padding-top: 5px;
  margin-top: 5%;
  border-radius: 15px;
  outline: none;
  color: #ffffff;
  font-size: 150%;
  border: none;
  border-bottom: 4px solid #07976e;
  cursor: pointer;
  }
  & input {
    display: none;
  }
`

export const ImageContainer = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px ;
`
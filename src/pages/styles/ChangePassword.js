import styled from "styled-components";

export const Header = styled.header`
	height: 80.8px;
	width: 100%;
	background-color: #04bf8a;
	color: white;
	font-weight: 800;
	font-size: 40px;
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
		width: 50px;
    @media screen and (max-width: 320px){
    width: 30px;
  }
	}

  @media screen and (max-width: 480px){
    font-size:140%;
  }
`;

export const Message = styled.div`
	width: 90%;
	font-weight: 600;
	font-size: 40px;
	padding-left: 20px;
	padding-top: 20px;
	display: flex;
	justify-content: flex-start;
  @media screen and (max-width: 480px){
    font-size:140%;
  }
`;
export const Container = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
  @media screen and (max-width: 480px){
    flex-direction:column;
  }
`;

export const Container1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 480px){
    width: 100%;
    justify-content: center;
  }
`
export const Container2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px){
    width: 100%;
  }
`
export const Input = styled.input`
    height: 50px;
  width: 70%;
  border-radius: 15px;
  font-family: "Baloo Bhai 2";
  color: #565656;
  font-size: 20px;
  outline: none;
  border: none;
  margin-top: 30px;
  padding-left: 15px;
  @media screen and (max-width: 480px){
    width: 80%;
    font-size: 30px;
  }
  @media screen and (max-width: 320px){
    width: 80%;
    font-size: 20px;
  }
`
export const ContainerButton = styled.div`
    width: 100%;
  display: flex;
`
export const ContainerButton1 = styled.div`
  padding-left: 20px;
  height: 200px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end; 
  @media screen and (max-width: 480px){
    padding-left: 0px;
  }
`
export const ContainerButton2 = styled.div`
  height: 200px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start; 

  & Button {
    margin-left: 65px;
    @media screen and (max-width: 480px){
      margin-left: 15px;
  }
  @media screen and (max-width: 320px){
    margin-left: 15px;
  }
  }

  @media screen and (max-width: 768px){
    margin-left: 35px;
  }
`

export const Button = styled.button`
  background-color: #04BF8A;
  width: 40%;
  height: 60px;
  border-radius: 15px;
  outline: none;
  color: #ffffff;
  font-size: 25px;
  border: none;
  border-bottom: 4px solid #07976E;
  cursor: pointer;
  @media screen and (max-width: 480px){
    width: 60%;
  height: 60px;
  font-size: 20px;
  }
  @media screen and (max-width: 320px){
    width: 70%;
  height: 60px;
  font-size: 17px;
  }
`

export const ButtonCancel = styled(Button)`
  background-color: #BC1212;
  border-bottom: 4px solid #840909;
  padding: 5px;
`
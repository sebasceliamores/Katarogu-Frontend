import styled from 'styled-components'

export const Card = styled.div`
  width: 250px;
  height: 455px;
  color: #FFFFFF;
  background-color: #FFFFFF;
  margin: 10px 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px; 
  /* box-shadow: 1px 1px 7px 0.1px  #04bf8a; */
`
export const Header = styled.div`
  display: grid;
  height: 60px;
  grid-template-columns: 1fr 1fr;
  background-color:#28AAD9 ;
  border-bottom: 6px solid #157497;
`
export const HeaderLeft = styled.div`
  padding-left: 6px;
  align-self: center;
`
export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 7px;
`

export const Center = styled.div`
  text-align: center;
  border: 1px solid #04bf8a;
  & a {
    text-decoration:none;
  }
`
export const Image = styled.img`
  background-size: cover;
  width: 100%;
  height: 250px;
`
export const P = styled.p`
  color: #565656;
  height:78px;
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 0;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 100%;
  background-color: #BC1212;
  border-bottom: 10px solid #840909;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px; 
`
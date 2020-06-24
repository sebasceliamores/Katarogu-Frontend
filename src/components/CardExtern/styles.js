import styled from 'styled-components'
import { Link } from '@reach/router'

export const Card = styled.div`
  width: 225px;
  height: 350px;
  border: 3px solid #565656;
  border-radius: 8px;
  margin: 0px 20px;
  margin-bottom: 40px;
`
export const Card_Img = styled.div`
  height: 225px;
  width: 225px;
  background-size: cover;
  border-bottom: 3px dashed #04BF8A;

  &img{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 100%;
  width: 100%;
  background-size: cover;
  }
`
export const Card_Description = styled.div`
  height: 125px;
  width: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`
export const Button = styled(Link)`
  background-color: #04BF8A;
  text-align:center;
  text-decoration: none;
  color: #FFFFFF;
  width: 80%;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 15px;
  border-bottom: 3px solid #07976e;
  cursor: pointer;
  outline: none;
`
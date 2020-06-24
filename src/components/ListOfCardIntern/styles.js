import styled, { css} from 'styled-components'
import { EntryTittle, EntryTittle2, EntryText2 } from '../../styles/animation'


export const View = styled.div`
  width:100%;
  height: 100vh;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 280px);
  gap: 40px;
`
export const Overlay = styled.div`
  background-color: rgb(0, 0,0,.3);
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

  ${props => props.active && css`
    visibility: visible;
  `}
`
export const Popup = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
  border-radius: 15px;
  margin-top: 7%;
  padding-top: 20px;
  text-align: center;
  width: 80%;
  transition: .6s ease all;
  transform: scale(0.7);
  opacity: 0;
  position: relative;
  & h3{
    font-size: 36px;
    font-weight: 600;
    margin-top: 10px 0px;
    opacity:0;
    @media screen and (max-width: 480px){
      font-size: 26px;
  }
  }

  ${props => props.active && css`
    opacity: 1;
    transform: scale(1);
    transform: translateY(20px);
    
    & h3{
    animation: ${EntryTittle} .8s ease .5s forwards;
    }
  `}

  @media screen and (max-width: 480px){
    width: 90%;
  }

`
export const Popup2 = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
  position: absolute;
  bottom: 50%;
  border-radius: 15px;
  padding-top: 20px;
  text-align: center;
  width: 80%;
  height: auto;
  transition: .3s ease all;
  transform: scale(0.7);
  opacity: 0;
  visibility: hidden; 

  & h3{
    font-size: 36px;
  font-weight: 600;
  margin-top: 10px 0px;
  opacity: 0;
  @media screen and (max-width: 480px){
      font-size: 26px;
  }
  }

  ${props => props.active && css`
    animation: ${EntryTittle2} 0.6s ease 0.5s forwards;
    opacity:1;

    & h3{
    opacity: 1;
  }
  `}
  
  @media screen and (max-width: 480px){
    width: 90%;
  }
`
export const Buttons = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: flex-end;
`
export const ButtonCancel = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 15px;
  outline: none;
  color: #ffffff;
  font-size: 19px;
  border: none;
  cursor: pointer;
  background-color: #04BF8A;
  border-bottom: 4px solid #07976E;
  @media screen and (max-width: 480px){
    height: 40px;
    font-size: 100%;
  }
`
export const ButtonDelete = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 15px;
  outline: none;
  color: #ffffff;
  font-size: 19px;
  border: none;
  cursor: pointer;
  background-color: #BC1212;
  border-bottom: 4px solid #840909;
  @media screen and (max-width: 480px){
    height: 40px;
    font-size: 100%;
  }
`
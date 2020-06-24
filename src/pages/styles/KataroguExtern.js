import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`
export const Header = styled.section`
  position: sticky;
  top: 0;
  bottom: 0; 
  box-sizing: border-box;
  padding-top: 10px;
  background-color: #565656;
  color: #FFFFFF;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 30%;
  grid-template-areas: 'left right';
  justify-items: center;
  align-items: flex-start;

  @media screen and (max-width: 480px){
  grid-template-areas:  'left left'
                        'right right';
  padding: 0px;
}
`
export const HeaderName = styled.div`
  grid-area: left;
`
export const HeaderMenu = styled.div`
  grid-area: left;
  & h1 {
    color: #04BF8A;
  }
  & h5{
    margin-top: 6px;
  }
`
export const HeaderInformation = styled.div`
  grid-area: right;
  font-size: 80%;
  justify-self: right;
  padding-right: 15px;
  @media screen and (max-width: 768px){
    font-size: 70%;
  }
  @media screen and (max-width: 480px){
  border-top: 2px dotted #04BF8A;
  font-size: 80%;
  justify-self: center;
  padding: 0px;
  font-size: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 18px 18px;
  height: auto;
  justify-items: stretch;
}
`
export const ContactUs = styled.h4`
  padding-top: 5px;
  border-bottom: 3px dotted #04BF8A;
  @media screen and (max-width: 480px){
    border: 0px;
    align-self: center;
}
`
export const Product = styled.section`
  display: grid;
  width: 90%;
  justify-self: center;
  border-left: 3px dashed #565656;
  border-right: 3px dashed #565656;
`
export const Address = styled.div`
  position: fixed;
  margin-left: 15%;
  width: 60%;
  text-align: center;
  border: 3px solid #04BF8A;
  border-top: none;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: #565656;
  font-weight: 900;
  background-color: rgba(4, 191, 138, 0.9);
  @media screen and (max-width: 480px){
    font-size: 75%;
}
`
export const Footer = styled.section`
  box-sizing: border-box;
  display: grid;
  background-color: #04BF8A;
  color: #FFFFFF;
  grid-template-columns: 1fr 1fr;
  font-size: 90%;
  @media screen and (max-width: 480px){
    font-size: 70%;
}
`
export const FooterLeft = styled.div`
  justify-self: left;
  padding-left: 4%;
  text-align: center;
`
export const FooterRight = styled.div`
  justify-self: right;
  font-size: 90%;
  padding-right: 11%;
  text-align: center;
`
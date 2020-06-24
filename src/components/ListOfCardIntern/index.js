import React,{ useState }  from 'react'
import { CardIntern } from '../CardIntern'

import { View, Overlay, Popup, Popup2, Buttons, ButtonCancel, ButtonDelete } from './styles'


export const ListOfCardIntern = () => {
  const [overlay, setOverlay] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);


  const handlerClick = (event) => {
    if  (overlay){
      setOverlay(false)
      setPopup(false)
    }else{
      setOverlay(true)
      setPopup(true)
    }
  }

  const handlerDelete = (event) => {
    setPopup(false)
    setPopup2(true)

    setTimeout(() => {
      setOverlay(false)
      setPopup2(false)
    }, 3000)

  }

  return(
    <React.Fragment>
      <View>
      {
      [1,2,3,4,5,6].map(item => <CardIntern key={item} onClick={handlerClick} />)
      }
      </View>

        <Overlay active={overlay} id="overlay">
      <Popup active={popup} id="popup">
        <h3>¿Está seguro de eliminar este producto?</h3>
        
        <Buttons >
          <ButtonDelete onClick={handlerDelete} id="button__delete">Eliminar mi cuenta</ButtonDelete>
          <ButtonCancel onClick={handlerClick} id="button__cancel">Cancelar</ButtonCancel>
        </Buttons>

      </Popup>

      <Popup2 active={popup2} id="popup2">
        <h3>Producto eliminado satisfactoriamente</h3>
      </Popup2>

    </Overlay>
  </React.Fragment>
  )
}
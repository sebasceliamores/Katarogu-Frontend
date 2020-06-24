import React, { Fragment } from 'react'
import { View } from './styles'
import { CardExtern } from '../CardExtern'

export const ListOfCardExtern = () =>{
  return(
    <Fragment>
      <View>
        {
          [1,2,3,4,5,6,7,8,9].map(item => <CardExtern key={item} />)
        }
      </View>
    </Fragment>
  )
}
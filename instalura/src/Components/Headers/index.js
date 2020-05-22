import React, {Fragment} from 'react';
import { 
  Text,
  Image,
  View
 } from 'react-native'
 import style from './style'

const Headers = ({ nomeUsuario, urlImage }) => {
  return (
    <View style={style.headers}>
      <Image 
        source={{ uri: urlImage }}
        style={style.fotoUsuario} 
      />   
      <Text>{nomeUsuario}</Text>
    </View>
  )
}

export default Headers;
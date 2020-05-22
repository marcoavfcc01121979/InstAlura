
import React, {Fragment, useState} from 'react';
import { 
  Image,
  Text,
  TouchableOpacity,
  View
 } from 'react-native'

import style from './style'


const Foto = ({ urlFoto, descricao, quantLikes, curtiuFoto, imagensLikes }) => {
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(quantLikes);

  const clicouCurtiu = () => {
    const [quant,novoEstadoCurtiu] = curtiuFoto(curtiu,likes)
    setLikes(quant);
    setCurtiu(!novoEstadoCurtiu);
  }
  return (
    <Fragment>
      <Image 
        source={{uri: urlFoto}}
        style={style.image}
      />   
      <Text>{descricao}</Text>
      <View style={style.mostrarLikes}>
        <TouchableOpacity onPress={curtiuFoto}>
          <Image
            source={imagensLikes(curtiu)}
            style={style.fotoLike} 
          />
        </TouchableOpacity>
        <Text>curtidas {likes}</Text>
      </View>
    </Fragment>
  )
};



export default Foto;

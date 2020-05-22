/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Fragment, useState, useEffect} from 'react';
import Comentarios from '../../Components/Comentarios';
import Headers from '../../Components/Headers'
import Foto from '../../Components/Foto'
import { 
  ScrollView, 
  FlatList,
  StatusBar,
  Platform
 } from 'react-native'
import lerFotos from '../../api/feed'
import { curtiuFoto, imagensLikes } from '../../api/curtidas';
import adicionarComentario from '../../api/comentarios';

const Feed = () => {
  const [fotos, setFotos] = useState([]);


  useEffect(() => {
    lerFotos(setFotos);
  },[])

  let altura = 0
  //if(Platform.OS === "ios"){
  //  altura = 35;
  //}
  return (
    <ScrollView style={{ marginTop: altura }}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content" 
      />
      <FlatList
        data={fotos}
        //keyExtractor={(item,index) => index.toString()}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Headers 
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto 
              urlFoto={item.url}
              descricao={item.description}
              quantLikes={item.likes}
              imagensLikes={imagensLikes}
              curtiuFoto={curtiuFoto}
            />
            <Comentarios 
              comentarios={item.comentarios}
              adicionarComentario={adicionarComentario}
            />
          </Fragment>
        } 
      />
    </ScrollView>    
  )
};


export default Feed;

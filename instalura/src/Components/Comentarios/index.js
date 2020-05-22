import React, {Fragment, useState} from 'react';
import { 
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList
 } from 'react-native'

import style from './style'

//import { TextInput } from 'react-native';

const Comentarios = ({ comentarios, adicionarComentario }) => {
  const [ estcomentarios, setEstComentarios ] = useState(comentarios)
  
  const comentar = () => {
    campoInput.clear();
    const novoComentario = adicionarComentario(
      conteudoCampoInput, "Bugan")
      setEstComentarios([...estcomentarios, novoComentario])
  }

  let campoInput;
  let conteudoCampoInput = "";
  return (
      <Fragment>
        <FlatList 
          data={estcomentarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
            <View style={style.inline}> 
              <Text> {item.text} </Text>
              <Text> {item.userName} </Text>
            </View>}
        />
        <View style={style.inline}>
          <TextInput
            ref={textInput => campoInput = textInput}
            onChangeText={ texto => conteudoCampoInput = texto }
            placeholder={"Deixe seu coméntario...."}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={adicionarComentario}> 
            <Image style={style.imgSend} source={require("../../../res/img/send.png")}/>
          </TouchableOpacity>
        </View>
        
      </Fragment>
  )
}

export default Comentarios;
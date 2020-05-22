/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Fragment, useState } from 'react';

import { 
  Text,
  TextInput,
  Button,
  View,
  Platform
 } from 'react-native'
import lerFotos from '../../api/feed'
import style from './style';
import efetuarLogin from '../../api/login';
import AsyncStorage from '@react-native-community/async-storage'

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [messageErro, setMessageErro] = useState("");


  const tentarLogar = async () => {
    try{
      const token = await efetuarLogin(usuario, senha);
      await AsyncStorage.setItem('instalura_token', token);
      //Ir para tela de Feed
      navigation.replace("Feed");
      
    }catch(erro){
      setMessageErro(erro.message);
    }
    
  }

  return (
    <Fragment>
      <View style={style.conteiner}>
        <View style={style.inputs}>
          <TextInput
            placeholder="Usuario"
            onChangeText={texto => setUsuario(texto)} 
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry={true} 
            onChangeText={texto => setSenha(texto)}
          />
          <Text>{messageErro}</Text>
        </View>
      </View>
      <View style={style.botaoView}>
        <Button title="Entrar" onPress={tentarLogar}></Button>
      </View>
    </Fragment>   
  )
};

Login.navigationOptions = () => {
  const opcoes = {
    title: "Login"
  }
  if(Platform.OS == 'android'){
    opcoes.header = null
  }

  return opcoes;
}

export default Login;

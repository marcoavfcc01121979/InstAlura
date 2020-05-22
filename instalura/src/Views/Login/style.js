import { StyleSheet, Dimensions } from 'react-native'

const largura = Dimensions.get("screen").width;
const style = StyleSheet.create({
  conteiner: {
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 30
  },
  botaoView: {
    alignItems: "center",
    marginBottom: 30
  }
})

export default style;
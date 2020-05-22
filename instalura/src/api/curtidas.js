const imagensLikes = (curtiu) => {
  if(curtiu) {
    return require("../../res/img/s2-checked.png");
  }else {
    return require("../../res/img/s2.png")
  }
}

const curtiuFoto = (curtiu, likes) => {
  let quant = likes;
  if(curtiu){
    quant--;
  }else{
    quant++;
  }
  return [!curtiu, quant]
}

export {imagensLikes, curtiuFoto}
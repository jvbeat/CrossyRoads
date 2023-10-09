let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDaColisao;
let somDoPonto;



function preload(){
  imagemDaEstrada = loadImage("assets/img/estrada.png")
  imagemDoAtor = loadImage("assets/img/ator-1.png")
  imagemCarro1 = loadImage("assets/img/carro-1.png")
  imagemCarro2 = loadImage("assets/img/carro-2.png")
  imagemCarro3 = loadImage("assets/img/carro-3.png")
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("assets/sounds/trilha.mp3");
  somDaColisao = loadSound("assets/sounds/colidiu.mp3");
  somDoPonto = loadSound("assets/sounds/pontos.wav");
}





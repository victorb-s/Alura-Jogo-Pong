//Construção da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 18;
let raioBolinha = diametroBolinha / 2; 

let colidiu = false;

//Construção da Raquete
let xRaquete = 5;
let yRaquete = 150;
let widthRaquete = 8
let heightRaquete = 90

//Construção do oponente
let xRaqueteOponente = 587;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//Velocidade de movimentação
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Pontos da Bolinha
let direitaBolinha = xBolinha + raioBolinha;
let esquerdaBolinha = xBolinha - raioBolinha;
let inferiorBolinha = yBolinha + raioBolinha;
let superiorBolinha = yBolinha - raioBolinha;
    
//Pontos da Raquete
let direitaRaquete = xRaquete + widthRaquete;
let superiorRaquete = yRaquete;
let inferiorRaquete = yRaquete + heightRaquete;	

//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  
  criarBolinha();
  movimentarBolinha();
  verificarColisaoBorda();
  
  criarRaquete(xRaquete, yRaquete);
  movimentarMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  
  criarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentarRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function criarBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentarBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificarColisaoBorda(){
  if(xBolinha + raioBolinha > width ||
     xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;
  }
  
  if(yBolinha + raioBolinha > height ||
     yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  }
}

function criarRaquete(x, y){
  rect(x, y, widthRaquete, heightRaquete)
}

function movimentarMinhaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 5
  }
  
  if(keyIsDown(83)){
    yRaquete += 5
  }
  
  yRaquete = constrain(yRaquete, 10, 310);
}


function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, widthRaquete, heightRaquete, xBolinha, yBolinha, raioBolinha);
  
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentarRaqueteOponente(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 5
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 5
  }
  
  yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  
  fill(color(255, 140, 0));
  rect(230, 10, 40, 20)
  fill(255);
  text(meusPontos, 250, 26);
  
  fill(color(255, 140, 0));
  rect(330, 10, 40, 20)
  fill(255);
  text(pontosDoOponente, 350, 26)
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  
  if(xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var player1,player2,melon,orange,pineapple,jungle,apple,banana;

var players = []

var score = 0;

var fruits,players,fruitGroup;

var player1score=0;
var player2score=0;

var form, player, game;

function preload(){

  player1 = loadImage("../images/basket2.png");
  player2 = loadImage("../images/basket2.png");
  melon = loadImage("../images/melon2.png");;
  orange = loadImage("../images/orange2.png");
  apple = loadImage("../images/apple2.png");
  banana = loadImage("../images/banana2.png");
  pineapple = loadImage("../images/pineapple2.png");
  jungle = loadImage("../images/jungle.jpg");
 
  
}
function setup(){
  canvas = createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){

    game.end();
  }
}

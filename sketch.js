var  form,player,game,database;
var gameState=0,playerCount;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
   
    drawSprites();
}


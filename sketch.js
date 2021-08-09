var playerCount, gameState, database, backgroundImg;
var form, player, game;
var allPlayers = [];
var bgCar;
var car1, car2, car3, car4;
var cars=[];

function preload(){
 bgCar = loadImage("bgCar.jpeg");
 car1img = loadImage("car1.png");
 car2img = loadImage("car2.png");
 car3img = loadImage("car3.png");
 car4img = loadImage("car4.png");

trackImg = loadImage("track.jpeg");

rankImg=loadImage("rank.png");
}
function setup(){
database=firebase.database();
gameState=0;
game=new Game();
game.getState();
game.start();
createCanvas(displayWidth, displayHeight);
}

function draw(){
    background(bgCar);
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    if(gameState===2){
        clear();
        game.end();
    }
}
 
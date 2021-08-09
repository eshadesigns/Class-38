class Game{
    constructor(){
   
    }
    getState(){
    var gref = database.ref("gameState");
    gref.on("value", function (data){
        gameState=data.val();
    });
    }
    update(state){
     database.ref('/').update({
         gameState: state
     }) 
    }
    async start(){
    if(gameState===0){
        player=new Player();
        var playerRef = await database.ref("playerCount").once("value");
        if(playerRef.exists()){
            playerCount = playerRef.val();
            player.getCount();
        }
        form=new Form();
        form.display();
    }
    car1=createSprite(100, 100);
    car2=createSprite(300, 100);
    car3=createSprite(500, 100);
    car4=createSprite(700, 100);
    car1.addImage(car1img);
    car2.addImage(car2img);
    car3.addImage(car3img);
    car4.addImage(car4img);
    cars=[car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var x = 200;
            var y = 0;
            var index = 0;
            
            for(var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(plr==="player" + player.index){
                  fill("red");
                  cars[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y=cars[index-1].y;
                }
                else{
                    fill("black");
                    cars[index-1].shapeColor="black";
                }
                textSize(20);
            text(allPlayers[plr].name+" : " + allPlayers[plr].distance, cars[index-1].x-20, cars[index-1].y+99);
            //pos+=50;
            }
            drawSprites();
        }
        if(player.distance>=4300){
            gameState=2;
            }
            
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=10;
            player.update();
        }
    }
    end(){
        background(rankImg);
    }
}
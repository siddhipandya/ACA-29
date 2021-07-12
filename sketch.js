function preload()
bg= loadImage ("images/bg.png");
playerImage= loadImage ("images/bunnyImg.png")
snakeImage= loadImage ("images/snake.png")
targetImage= loadImage ("images/bunnyImg.png")



function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  player= createSprite(40,550,10,10);
  player.addImage(playerImage);
  target= createSprite(550,40,30,30);
  target.addImage(targetImage);
  obs1= createSprite(80,280,120,20);
  obs1.velocityX=5;
  obs2= createSprite(10,330,120,20);
  obs2.velocityX=5;
  obs3= createSprite(160,330,120,20);
  obs3.velocityX=5;
  obs4= createSprite(310,330,120,20);
  obs4.velocityX=5;
  obs5= createSprite(460,330,120,20);
  obs5.velocityX=5;
  obs6= createSprite(610,330,120,20);
  obs6.velocityX=5;
 obs7= createSprite(230,280,120,20);
  obs7.velocityX=5;
  obs8= createSprite(380,280,120,20);
  obs8.velocityX=5;
  snakeGroup= new Group();
  target.shapeColor = "orange"
  obs8.shapeColor = "red"
  obs7.shapeColor = "red"
  obs6.shapeColor = "red"
  obs5.shapeColor = "red"
  obs4.shapeColor = "red"
  obs3.shapeColor = "red"
  obs2.shapeColor = "red"
  obs1.shapeColor = "red"
 player.shapeColor= "white"
 
}

function draw() {
  background(bg);
 
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]); obs3.bounceOff(edges[0])
obs4.bounceOff(edges[0]);obs4.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);obs5.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);obs6.bounceOff(edges[1]);
obs7.bounceOff(edges[0]);obs7.bounceOff(edges[1]);
obs8.bounceOff(edges[0]);obs8.bounceOff(edges[1]);

if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
textSize(20)
fill("blue")
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550
}
if(player.isTouching(obs3)){
  obs3.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
if(player.isTouching(obs4)){
  obs4.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
if(player.isTouching(obs5)){
  obs5.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
if(player.isTouching(obs6)){
  obs6.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
if(player.isTouching(obs7)){
  obs7.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
if(player.isTouching(obs8)){
  obs8.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=40
  player.y=550

}
for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (player.isTouching(temp)) {
    player.x=40;
    player.y=550;
    }   
  }
  

  drawSprites();  
    
}
function generateSnakes(){
  if(frameCount % 30===0){
    var snake = createSprite(600,random(70,520),random(30,120),5);
    snake.shapeColor="yellow"
    snake.addImage(snakeImage);
    snake.scale=random(0.1,0.4);
    snake.velocityX=-6;
   
    snakeGroup.add(snake);
   }
  
  }
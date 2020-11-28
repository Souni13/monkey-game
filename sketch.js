
var monkey , monkey_running
var invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey=createSprite(50,200,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale= 0.15 ;
  
  ground= createSprite(300,250,600,10)
  ground.velocityX= -7;
  ground.x= ground.width/2; 
  console.log(ground.x); 
  
  invisibleGround= createSprite(300,250,600,10);
  invisibleGround.visible= false;  
  
  foodGroup= createGroup();
  obstacleGroup= createGroup();
 
  survivalTime= 0;
  
}


function draw() {
  background("white");
  text("Survival Time:"+ survivalTime,500,10);
  survivalTime= survivalTime+Math.round(getFrameRate()/60);
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-12; 
  }
monkey.velocityY= monkey.velocityY+0.8; 
monkey.collide(invisibleGround); 
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
 spawnFruits();  
 spawnObstacles(); 
  
 score = score + Math.round(getFrameRate()/60);
  drawSprites();
  
  
}
function spawnFruits(){
  if(World.frameCount % 80===0){
  banana= createSprite(200,200,20,20);
  banana.y = Math.round(random(120,200));
  banana.addImage("banana", bananaImage);
  banana.scale= 0.15;
  banana.velocityX= -4;
  banana.lifetime = 200;
  
  banana.depth= monkey.depth;
  monkey.depth= monkey.depth+1;
    
  foodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(World. frameCount % 300===0){
   obstacle= createSprite(600,200,20,20);
  obstacle.addImage("obstacle", obstacleImage); 
  obstacle.scale= 0.25;
  obstacle.velocityX= -7;
  obstacle.lifetime= 200;
    
  obstacleGroup.add(obstacle);
  
  obstacle.depth= monkey.depth;
  monkey.depth= monkey.depth+1;
  }
}
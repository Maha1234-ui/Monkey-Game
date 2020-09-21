
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  var survival_Time = 0;
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4; 
ground.x = ground.width/2;
console.log(ground.x); 
  
score = 0;
  
FoodGroup = createGroup();  
obstaclesGroup = createGroup();
  
}


function draw() {
background("lightgreen");
  
if(ground.x<0){
ground.x = ground.width/2
}
  if(keyDown("space")){
    
    monkey.velocityY = -12;
  }   
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
    
  spawnFood();
  spawnobstacles();
    
drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
if(obstaclesGroup.isTouching(monkey)){
  monkey.velocityY = 0;
  monkey.addAnimation("stop",monkey_running);
  monkey.velocityX = 0;
  ground.velocityX = 0;
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setLifetimeEach(-1);
  obstaclesGroup.setLifetimeEach(-1);
}
stroke("black");  
textSize(20);
fill("black");  
  survival_Time = Math.ceil(frameCount/frameRate()); 
text("Survival Time : "+survival_Time,100,50); 
     
}
function spawnFood(){
if(frameCount % 80 === 0){
  banana = createSprite(600,450,40,10);
  banana.y = random(120,200);
  banana.velocityX = -8;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  FoodGroup.add(banana);
  monkey.depth = banana.depth+1;
  banana.lifetime = 300;
  
 }
}

function spawnobstacles(){
if(frameCount % 120 === 0){
   obstacle = createSprite(800,320,40,10);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   obstacle.lifetime = 300;
   obstacle.scale = (0.11);
   obstaclesGroup.add(obstacle);

}
}
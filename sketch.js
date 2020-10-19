
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  

}

function draw() {
 background("white");
  
  
 if(ground.x < 0){
 ground.x = ground.width/2;
 }
  
 if(keyDown("space")){
 monkey.velocityY = -12; 
 }
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
 monkey.collide(ground);
  
  
 if(World.frameCount% 20 === 0){
  banana = createSprite(400,200,20,20)
  banana.scale = 0.1
   r = Math.round(random(1,4));
    if(r == 1){
    banana.addImage(bananaImage);
    banana.velocityX = -7
    }
}
   if(banana.isTouching(monkey)){
  banana.destroyEach();
  monkey.scale = +0.1;
}

 if(World.frameCount% 30 === 0){
  obstacle = createSprite(400,320,20,20)
  obstacle.scale = 0.2
   r = Math.round(random(1,4));
    if(r == 1){ 
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -8.5
    }
}
  
 

  
}







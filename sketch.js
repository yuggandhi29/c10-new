var sea,seaimage,ship,shipimage

function preload(){
   seaimage = loadImage("sea.png")  
   shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  }


function setup(){
  createCanvas(400,400);
  sea = createSprite(0,0,400,400)
  sea.addImage("sea",seaimage)
  sea.velocityX = -7
  ship =  createSprite(200,350,1,1)
  ship.addAnimation("ship",shipimage)
  ship.velocityX = 4
}

function draw() {
  background("blue");
  if (sea.x<0){ 
    sea.x = sea.width/2
  }
 drawSprites()
}
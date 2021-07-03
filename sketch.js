var sea;
var seaImg;
var shipImg;
var ship;

function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png",)
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200, 125, 400, 25)
sea.addImage("sea", seaImg)
sea.scale = 0.2
sea.x = sea.width/10

  ship = createSprite(200, 150, 10, 30)
ship.addAnimation("ship", shipImg)
ship.scale = 0.25
ship.x = 200

}

function draw() {

sea.velocityX = -2

if (sea.x < 0) {
  sea.x = sea.width/10 
  }

  drawSprites();
}
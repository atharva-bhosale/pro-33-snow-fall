
var back,back2,back3,backimg;
var santa , santaimg;
var snow , snowimg;
var snow2 , snow2img;
var snow3 , snow3img;
var banner , bannerimg;
function preload(){
  backimg=loadImage("snow2.jpg")
  santaimg=loadImage("unnamed (1).png")
  snowimg=loadImage("snow4.webp")
  snow2img=loadImage("snow5.webp")
  snow3img=loadImage("snowball1.png")
  bannerimg=loadImage("Christmas.png")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  back3=createSprite(400,50,10,10);
  back3.addImage("back3",backimg);

  back2=createSprite(1400,50,10,10);
  back2.addImage("back2",backimg);

  back=createSprite(190,50,10,10);
  back.addImage("back",backimg);

  santa=createSprite(300,200,10,10);
  santa.addImage("santa",santaimg);

  banner=createSprite(700,330,10,10);
  banner.addImage("banner",bannerimg);
  banner.scale=0.1;
}

function draw() {
  background(0);  

  back.velocityX=-3

  if (back.x < 0){
    back.x = back.width/2;
  }

  back2.velocityX=-3

  if (back2.x < 0){
    back2.x = back2.width/2;
  }

  if(frameCount%60===0){
    snow=createSprite(random(90,800),0,10,10);
    snow.addImage("snow",snowimg);
    snow.velocityY=3;
    snow.scale=0.1;
  }

  if(frameCount%60===0){
    snow2=createSprite(random(90,800),0,10,10);
    snow2.addImage("snow2",snow2img);
    snow2.velocityY=3;
    snow2.scale=0.1;
  }

  
  if(frameCount%60===0){
    snow3=createSprite(random(90,800),0,10,10);
    snow3.addImage("snow3",snow3img);
    snow3.velocityY=3;
    snow3.scale=0.04;
  }

  drawSprites();
}
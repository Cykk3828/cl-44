var road,roadIMG,runner,runnerIMG,cactus,cactusIMG
function preload(){
roadIMG=loadImage("Road2.png")
runnerIMG=loadAnimation("Runner-1.png","Runner-2.png")
cactusIMG=loadImage("cactus.png")
}


function setup(){
  createCanvas(1500,700)
road=createSprite(750,350,1500,700)
road.addImage(roadIMG)
runner=createSprite(350,350)
runner.addAnimation("running",runnerIMG)

runner.scale=0.1



}

function draw(){
  background("black");
drawSprites();
road.scale=0.3
road.velocityX=3
if(road.x > 1500){
  road.x=750

}
cactus1()
}
function cactus1(){
  if(frameCount % 60 === 0){
    cactus=createSprite(450,450)
    cactus.addImage(cactusIMG);
    cactus.velocityX=-3
    cactus.scale=0.1
  }
}

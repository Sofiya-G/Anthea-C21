var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 F = createSprite(600, 400, 50, 80);
  F.shapeColor = "green";
  F.debug = true;

  M = createSprite(400,200,80,30);
  M.shapeColor = "green";
  M.debug = true;

  tom = createSprite(400, 200, 50, 80);
  tom.shapeColor = "orange";
  tom.debug = true;
  tom.velocityX = -3;

  jerry = createSprite(50,200,80,30);
  jerry.shapeColor = "grey";
  jerry.debug = true;


}

function draw() {
  background(0,0,0);  
  M.x = World.mouseX;
  M.y = World.mouseY;

 // console.log( movingRect.x - fixedRect.x);
 //console.log(fixedRect.x -  movingRect.x );

  //fixedRect.shapeColor = "green";
 
 if(ISTOUCH(M,F)) {
  F.shapeColor = "pink";
  M.shapeColor = "pink";
 }

 if(ISTOUCH(tom, jerry)){
  tom.shapeColor = "grey";
 }
  drawSprites();


}

function ISTOUCH (movingRect ,  fixedRect)
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
     {
  return true;
}
else {
  return false;
}
  
}



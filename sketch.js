var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;
   
  
  if (frameCount %80 ===0) {
  
    createApples();
  
   }

   if (frameCount %80 ===0) {
     
   createleaf();
   
   leaf.depth=apple.depth
   
   }
   
  drawSprites();
  
}
     
function createApples() {


  apple=createSprite(350,100,10,10)
 apple.addImage(appleImg)
 apple.scale=0.05
 apple.velocityY=+4
  apple.x=Math.round(random(50,350))
  rabbit.depth=apple.depth;
  if (rabbit.collide(apple)) {
    apple.destroy 
  }
}

function createleaf() {
  (frameCount %80 ===0)

  leaf=createSprite(350,100,10,10)
 leaf.addImage(leafImg)
 leaf.scale=0.05
 leaf.velocityY=+4
  leaf.x=Math.round(random(50,350))
  rabbit.depth=leaf.depth; 
  
}
  

  





var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car =createSprite(50, 200, 50,50);
  wall =createSprite(1220,200,30,200);
  wall.shapeColor=color(80,80,80);
 car.velocityX=speed;

  
}

function draw(){
  background(0);  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0;
  var defortmation =0.5 * weight * speed * speed/22500;
  if(defortmation > 180)
  {
  car.shapeColor("red");
  }
  if(defortmation<180 && defortmation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(defortmation<100)
  {
  car.shapeColor=color("green");
  }
}}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;



function setup() {
	createCanvas(1250,1250)
	engine = Engine.create();
	World = engine.world;

	//Create the Bodies Here.
  groundObj =new Ground(width/2,670,width,20);
  leftside=new Ground(1100,600,20,120);
  rightside=new Ground(1000,600,20,120);

   var ball_options={
  isStatic=false, 
  restitution: 0.3,
  friction: 0,
  density: 1.2
 }


  ball = Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);
   rectMode(CENTER);
   ellipseMode(RADIUS);
  }


function draw() {
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  ground.js.display();
  groundObj.display();
  leftside.display();
  rightside.display();
  keyPressed();
  drawSprites();
  
}
function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

}



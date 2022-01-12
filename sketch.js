
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

var groundObj
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.

	ball = new Ball(100, 300, 20)

	groundObj = new Ground(width/2, 670 ,width ,20)
	leftSide = new Ground(550, 600, 20, 120)
	rightSide = new Ground(750, 600, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ball.display()
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0.65, y: -0.65})
	}
}




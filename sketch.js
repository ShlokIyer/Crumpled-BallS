
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, line1, line2, line3, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1535, 700);

	line1=createSprite(1168, 630, 10, 100);
	line1.shapeColor = "red"
	line2=createSprite(1280, 670, 212, 10);
	line2.shapeColor = "red"
	line3=createSprite(1390, 630, 10, 100);
	line3.shapeColor = "red"


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 690, 10000, 20);
	paper = new Paper(200, 300, 10);








	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 18,
		y: -20
	  });
	}
  }


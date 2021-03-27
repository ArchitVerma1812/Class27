
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(500, 300, 100);
	bob2 = new Bob(400, 300, 100);
	bob3 = new Bob(300, 300, 100);
	bob4 = new Bob(200, 300, 100);
	bob5 = new Bob(100, 300, 100);

	roof1 = new roof(300, 20, 500, 20);

	rope1 = new rope(bob1.body,roof1.body, 200, 0)
	rope2 = new rope(bob2.body,roof1.body, 100, 0)
	rope3 = new rope(bob3.body,roof1.body, 0, 0)
	rope4 = new rope(bob4.body,roof1.body, -100, 0)
	rope5 = new rope(bob5.body,roof1.body, -200, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();

  drawSprites();
 
}




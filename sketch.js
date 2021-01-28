
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball,top;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Ball(500,700,50);
	ball2 = new Ball(600,700,50);
	ball3 = new Ball(600,700,50);
	ball4 = new Ball(600,700,50);
	top1 = new Top(350,200,500,20);
	constlog1= new Constlog(ball1.body,top1.body);
	constlog2= new Constlog(ball2.body,top1.body);
	constlog3= new Constlog(ball3.body,top1.body);
	constlog4= new Constlog(ball4.body,top1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ball1.display();
  ball2.display();
  ball3.display()
  ball4.display()
  top1.display();
  constlog1.display();
  constlog2.display();
  constlog3.display();
  constlog4.display();
  drawSprites();
 
}




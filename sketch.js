
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dis1, dis2, dis3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground (400,680,800,20)
paper = new Paper(50,650,25)
dis1 = createSprite(550,660,150,25)
dis2 = createSprite(615,640,25,100)
dis3 = createSprite(480,640,25,100)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 paper.display();
 dis1.display();
}

function KeyPressed(paper){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:550, y:655})
	}
}



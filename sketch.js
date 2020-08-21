
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5
var roof
var bobDiameter
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter=30
   bob1=new Bob(290,450,50)
   bob2=new Bob(340,450,50)
   bob3=new Bob(390,450,50)
   bob4=new Bob(440,450,50)
   bob5=new Bob(490,450,50)
   roof=new Roof(400,200,400,25)
   rope1=new Rope(bob1.body,roof.body,bobDiameter*-2,0)
   rope2=new Rope(bob2.body,roof.body,bobDiameter*-1,0)
   rope3=new Rope(bob3.body,roof.body,0,0)
   rope4=new Rope(bob4.body,roof.body,bobDiameter,0)
   rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)
	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
	
	if (keyCode===UP_ARROW){
		console.log("hi")
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

}
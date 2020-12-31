var helicopterIMG, helicopterSprite, packageSprite,packageIMG, boxSpriteLeft, boxSpriteRight, boxSpriteDown;
var packageBody, boxBodyLeft, boxBodyRight, boxBodyDown, ground, groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var building1, building2, building3, building4, building5, building6, building7, building8;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	 
	engine = Engine.create();
    world = engine.world;
    
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
    World.add(world, packageBody);
    

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);


	
	boxSpriteDown = createSprite(400, 760, 200, 20);
    boxSpriteDown.shapeColor = color(255, 0, 0);
    
    boxBodyDown = Bodies.rectangle(boxSpriteDown.x, boxSpriteDown.y, 200,20, {isStatic:true} );
    World.add(world, boxBodyDown);




	building1 = new Building(100, 610, 20, 100);
	building2 = new Building(50, 600, 15, 120)
	building3 = new Building(180, 590, 25, 140)
	building4 = new Building(260, 560, 50, 200);
	building5 = new Building(560, 510, 75, 300);
	building6 = new Building(640, 590, 22, 150);
	building7 = new Building(700, 560, 35, 200);
	building8 = new Building(770, 600, 40, 120);






	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
	building1.display();
	building2.display();
	building3.display();
	building4.display();
	building5.display();
	building6.display();
	building7.display();
	building8.display();

	drawSprites();
}

function keyPressed(){ 
	 if (keyCode === DOWN_ARROW){

	Matter.Body.setStatic(packageBody, false);

}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground (240,780,480,30);
	underground = new Underground (240,790,480,20);
	underground2 = new Underground (480,400,15,800);
	underground3 = new Underground (1,400,10,800);
	underground4 = new Underground (240,1,480,10);
	
  
  for(var j = 40; j <= width; j=j+90){
    plinkos.push(new Plinko(j,125));
    
  }

  for(var j = 40; j <= width -10; j=j+65){
    plinkos.push(new Plinko(j,225));
    
  }

  
  for(var j = 40; j <= width -20; j=j+80){
    plinkos.push(new Plinko(j,325));
    
  }

  
  for(var j = 40; j <= width -30; j=j+65){
    plinkos.push(new Plinko(j,425));
    
  }
  for(var k = 0; k <= width; k = k+80){
	divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
	
}
  
}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();

  underground.display();
  underground2.display();
  underground3.display();
  underground4.display(); 

   if(frameCount %60 === 0){

    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
   }

 
  for (var j = 0;j < plinkos.length; j++){

     plinkos[j].display();

   }

   for (var k = 0;k < divisions.length; k++){

    divisions[k].display();

   }


  drawSprites();
   }

 





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]
var divisionheight=300
score=0

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20,20);
  for (var k=0;k<=width;k=k+80){
    divisions.push(new division(k,height-divisionheight/2,10,divisionheight))
  }
  for (var j=75;j<=width;j=j+50){
    plinkos.push(new plinko(j,75))
  }
  for (var j=50;j<=width;j=j+50){
    plinkos.push(new plinko(j,175))
  }
  for (var j=75;j<=width;j=j+50){
    plinkos.push(new plinko(j,275))
  }
  for (var j=50;j<=width;j=j+50){
    plinkos.push(new plinko(j,375))
  }
}

function draw() {
  background(0);  
  
    
        
    Engine.update(engine);
    ground.display()
    for (var i = 0; i < plinkos.length; i++) {
       plinkos[i].display(); }
        if(frameCount%60===0){
           particles.push(
             new particle(random(width/2-30, width/2+30), 10,10));
              score++; }
               for (var j = 0; j < particles.length; j++) { 
                 particles[j].display(); } 
                 for (var k = 0; k < divisions.length; k++) {
                    divisions[k].display(); 
                  }
                  
  drawSprites();
 
}
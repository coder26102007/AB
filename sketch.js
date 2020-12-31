const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var ground;


function setup() {
  createCanvas(800,400);
 engine=Engine.create();
world=engine.world;

var ground_options={
isStatic:true

}

ground=Bodies.rectangle(400,200,50,50,ground_options);
World.add(world,ground);


}

function draw() {
  background("yellow");  
 Engine.update(engine);
 
 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,40,80);










  
  
  
  
  
  
}
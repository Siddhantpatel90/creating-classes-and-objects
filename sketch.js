const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(800,390,1600,20);
    box1=new Box(200,100,50,50)
box2=new Box(220,50,50,80) 
}

function draw(){
    background(0);
    Engine.update(engine);
 ground.display();
    box1.display();
   box2.display();

}
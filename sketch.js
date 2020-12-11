//namespaing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;
var pig1;
var log;
function preload(){
  backgroundImage=loadImage("sprites/bg.png")
}
function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,390,1200,20)

  box1 = new Box(800,350,70,70);
  box2 = new Box(1000,350,70,70);
  pig1 = new Pig(900,300)
  log1 = new Log(900,250,300,PI/2)

  box3 = new Box(800,200,70,70);
  box4 = new Box(1000,200,70,70);
  pig2 = new Pig(900,150)
  log2 = new Log(900,100,300,PI/2)

  box5 = new Box(900,70,70,70);
  log3 = new Log(830,40,150,PI/7)
  log4 = new Log(950,40,150,-PI/7)

  bird = new Bird(100,100);
}
function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  log3.display();
  log4.display();
  box5.display();

  bird.display();

  
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1;
var box3,box4,pig2,log2;
var log3,log4,box5;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    box1 = new Box(800,355,70,70);
    pig1 = new pig(870,365,50,50);
    box2 = new Box(940,355,70,70);
    log1 = new log(870,310,250,PI/2);
    
    box3 = new Box(800,265,70,70);
    pig2 = new pig(870,275,50,50);
    box4 = new Box(940,265,70,70);
    log2 = new log(870,220,250,PI/2);

    log3 = new log(800,135,120,PI/4);
    log4 = new log(940,135,120,-PI/4);
    box5 = new Box(870,175,70,70);
    
    bird1 = new Bird(100,200);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}
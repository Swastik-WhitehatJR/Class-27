const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    
    var opt = {
        isStatic : true,
        restitution:0,
        friction:0,
        density:0
      }

    consLog = new Log(200,120,150, -PI/2,opt);

    thirdBody = new Pig(200, 220,opt)

    bird = new Bird(100,100,opt);

    chain = new Chain(bird.body,consLog.body,12,0.12,opt);
    chain1 = new Chain(consLog.body,thirdBody.body,12,0.12,opt);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    bird.body.position.x = 100;
    bird.body.position.y = 100;

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    consLog.display();
    bird.display();
    platform.display();
    chain.display();
    chain1.display();
    thirdBody.display();
}

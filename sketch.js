const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//declarando as variáveis para fruta, corda, conexão e solo:
var solo, fruta;

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;

    solo = new Ground(200, 680, 600, 40);


   

    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
}

function draw() {
    background("cyan");

    //mostrar o solo
    solo.show();

   

    Engine.update(engine);
}

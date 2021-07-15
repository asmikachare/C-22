const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con1;
var con2;
var ballC; 



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ballC = Bodies.circle(200,80,10,ball_options);
  World.add(world,ballC);

  
  
  con = Matter.Constraint.create({
          pointA:{x:200,y:20},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);


  con2 = Matter.Constraint.create({
    bodyA: ball,
    pointA:{x:0,y:0},
    bodyB:ballC,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.01
  });

World.add(world,con2);
      
  
  
rectMode(CENTER);
ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ballC.position.x,ballC.position.y,20);

  push();
  strokeWeight(4);
  stroke(30,200,90);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(ball.position.x,ball.position.y,ballC.position.x,ballC.position.y);  
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }

}


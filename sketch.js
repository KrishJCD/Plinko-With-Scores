const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var plinkos=[];
var particle;
var divisions=[];
var ground;
var gamestate="play";
var score=0;
var count=0;

function setup() {
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width*3,20);
  for(var k=0;k<=width*3;k+=80)
  {
    divisions.push(new Divisions(k,(height-100/2),10,100));
  }
  createCanvas(800,400);  

  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,40));
  }
  for(var i=10;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,80));
  }
  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,120));
  }
  for(var i=10;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,160));
  }
  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,200));
  }
  for(var i=20;i<=width;i+=40)
  {
    plinkos.push(new Plinko(i,40));
  }
 // particle=new Particles(mouseX,10);
}



function draw() {
  background(0);  

  fill("red");
  textSize(18);
  
  //Scores
  text("500",30,height-100/2);
  text("400",110,height-100/2);
  text("300",180,height-100/2);
  text("200",250,height-100/2);
  text("100",330,height-100/2);
  text("100",410,height-100/2);
  text("200",490,height-100/2);
  text("300",570,height-100/2);
  text("400",650,height-100/2);
  text("500",730,height-100/2);

  //Scores


  for(var i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }


  if(particle!=null){
    particle.display();
    if((particle.body.position.x<=80 || particle.body.position.x>720) && particle.body.position.y>=350)
    {
      score=score+500;
      particle=null;
      count++;
    }
    else if(((particle.body.position.x<=160 && particle.body.position.x>80)||(particle.body.position.x>640 && particle.body.position.x<710)) && particle.body.position.y>=350)
    {
      score=score+400;
      particle=null;
      count++;
    }
    else if(((particle.body.position.x<=240 && particle.body.position.x>160)||(particle.body.position.x>560 && particle.body.position.x<640)) && particle.body.position.y>=350)
    {
      score=score+300;
      particle=null;
      count++;
    }
    else if(((particle.body.position.x<=320 && particle.body.position.x>240)||(particle.body.position.x>480 && particle.body.position.x<560)) && particle.body.position.y>=350)
    {
      score=score+200;
      particle=null;
      count++;
    }
    else if(((particle.body.position.x<=400 && particle.body.position.x>320)||(particle.body.position.x>400 && particle.body.position.x<480)) && particle.body.position.y>=350)
    {
      score=score+100;
      particle=null;
      count++;
    }
    if(count>=5)
    {
      gamestate="end";
    }
  }
  if(gamestate==="end")
  {
    textSize(20);
    text("GAME OVER:",370,180);
  }
  text("Score: "+score,20,30);

  
  for(var k=0;k<divisions.length;k++)
  {
    divisions[k].display();
  }
  //mousePressed();
  
  ground.display();
 //particle=null;
 rect(400,300,800,8);
 Engine.update(engine);
}

function mouseReleased()
{
  if(gamestate==="play"){
    particle=new Particles(mouseX,10);
  }
}
var Engine = Matter.Engine;
 var World = Matter.World;
 var Events = Matter.Events;
  var Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var division = [];
var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "PLAY";
function setup()
 {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  if(count>=5)
  {
  gameState="END";
  }
  if(gameState === "END")
  {
    
    text("GAME OVER",350,220);
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  
   
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
   text("500",25,550);
   text("500",105,550);
   text("500",185,550);
   text("500",265,550);
   text("100",345,550);
   text("100",425,550);
   text("100",505,550);
   text("200",585,550);
   text("200",665,550);
   text("200",745,550);
   text("Score :"+score,20,15);
   if(particle!=null)
  {
   particle.display();
   if(particle.body.position.y>760)
   {
   if(particle.body.position.x<300)
   {
     score+=500;
     particle=null;
   }
   else if(particle.body.position.x>300 && particle.body.position.x<600)
   {
     score+=100;
     particle=null;
   }
   else if(particle.body.position.x>600 && particle.body.position.x<900)
   {
     score+=200;
     particle=null;
   }
  }
}
}
function mousePressed()
{
  if(gameState!="END")
  {
   particle =  new Particle(mouseX,10,10);
   count+=1;
  }


}
var  Engine = Matter.Engine,
     World = Matter.World,
     Event = Matter.Event,
     Bodies = Matter.Bodies;
 
 END = 0;
 PLAY = 1;
 var gameState = PLAY;

var particles = [];
var plinkos = [];
var divisions = [];

var divisions,plinko,particle;
var divisionHeight=300;
var Over = "";
var score = 0;
var count = 0;

var particle;
var words = "";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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

if(gameState === PLAY){
  textSize(25)
  text(" SCORE :  "+ score,30,50);

  textSize(25)
  text(" 500 "+words,10,550);

  textSize(25)
  text(" 500 "+words,90,550);

  textSize(25)
  text(" 400 "+words,170,550);

  textSize(25)
  text(" 400 "+words,250,550);

  textSize(25)
  text(" 300 "+words,330,550);

  textSize(25)
  text(" 300 "+words,410,550);

  textSize(25)
  text(" 200 "+words,490,550);

  textSize(25)
  text(" 200 "+words,570,550);

  textSize(25)
  text(" 100 "+words,650,550);

  textSize(25)
  text(" 100 "+words,730,550);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
  
   }

  if(count>=6){

   gameState = END;

  }

  if(particle !=null){

    particle.display();
 
    if(particle.body.position.y >= 600){
         
    //text("hellow",500,500)
      if(particle.body.position.x > 0 && particle.body.position.x < 180){

          score +=500;
        
          if(count >=6){

            gameState = END
            
          }

          text("hello",500,500);
          
          particle = null

      }

      else if(particle.body.position.x>190 && particle.body.position.x<370){

        score +=400;      
        
        if(count >=6){

          gameState = END
          
        }
       // text("hello",500,500);
        particle = null;
       

      }
      else if(particle.body.position.x>380 && particle.body.position.x<460){

        score +=300;
        
        if(count >=6){

          gameState = END
          
        }
       
       
        particle= null;
       

      }

      else if(particle.body.position.x>470 && particle.body.position.x<550){

        score +=200;
       
        
        if(count >=6){

          gameState = END
          
        }
       
        particle = null;
        

      }

      else if(particle.body.position.x>560 && particle.body.position.x<800){

        score +=100;
        
        
        if(count >=6){

          gameState = END
          
        }
       
        particle = null;
       
      }


     
  }
  }
  
}else if(gameState === END){

  text("game over"+Over,400,400);

}
 



}

function mousePressed(){

 if(gameState!==END){

  count += 1;
   particle = new Particle(mouseX,10,10,10);
    
 }

}



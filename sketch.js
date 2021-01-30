const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world
var logo1;

var plr1I,plr2I,plr3I,plr4I;
var plr1,plr2,plr3,plr4;
var selection=0;
var play=1;
var gamestate=selection;




function preload(){
 plr1I = loadImage("game/box1.png");
 plr2I = loadImage("game/box2.png");
 plr3I = loadImage("game/box3.png");
 plr4I = loadImage("game/box4.png");
 
}

function setup(){
   createCanvas(1400,880);
   engine=Engine.create();
   world=engine.world;

   
   /*var ground_options = {
      isStatic : true
   }*/

   logo1 = new Logo(displayWidth/2 , displayHeight/2,500,500);

   //ground =  Bodies.rectangle(700, 440,1400,20,ground_options);
   plr1 = Bodies.rectangle(100,100,50,50);
   plr2 = Bodies.rectangle(200,100,50,50);
   plr3 = Bodies.rectangle(300,100,50,50);
   plr4 = Bodies.rectangle(400,100,50,50);
 

  
    
}

function draw(){
  //background("black");
   Engine.update(engine);


   //ground.display();

   console.log(frameCount);
   
  // rect(ground.position.x, ground.position.y, 200, 20);

  

      if(gamestate===selection){
         imageMode(CENTER);
            image(plr1I,this.plr1.x,this.plr1.y);
            image(plr2I,this.plr2.x,this.plr2.y);
            image(plr3I,this.plr3.x,this.plr3.y);
            image(plr4I,this.plr4.x,this.plr4.y);

      }   

   if(frameCount>60){
      logo1.display();

   }

      drawSprites();
}   


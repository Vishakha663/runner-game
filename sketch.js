const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background1Img,background1,Niko;
var invisibleGround,CoinImg;
//var CoinGroup;

function preload(){

   backgroundImg = loadImage("images/background.jpg");
   CoinImg = loadImage("images/coin.png");

}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1600,700);

 

  background1 = createSprite(1600,400,900,800);
  background1.addImage(backgroundImg);
  
  Niko = new Boy(800,50,50,50);
  Niko.scale = 1;

  invisibleGround = createSprite(800,610,1600,30);

  CoinGroup = new Group();
  //monsterGroup = new Group();

  

  
  
}

function draw() {

  
  background("white");
  background.velocityX = -10;
  if(background1.x < 0){
    background1.x = background1.width/2;
  }
  
  
  
 Engine.update(engine);

  Niko.display();
  invisibleGround.display();
 
  
  drawSprites();

 Niko.collide(invisibleGround);

  spawnCoin();
   
}

 function spawnCoin(){

        if(frameCount%10 === 0){
          var coin = createSprite(1500,510,10,40);
          coin.velocityX = -6;
          coin.addImage(CoinImg);
          coin.scale = 0.1;
        }
       
       
        //CoinGroup.add(coin);
        }
var wall,thickness;
var bullet,speed,weight;
var bRE,wLE;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight= random(30,52);
  bullet   = createSprite(50,200,20,20);
  bullet.shapeColor = "white";
  wall  = createSprite(800,200,thickness,height/2);
  wall.shhapeColor = color(80,80,80);
}

function draw() {
  background("black");
  text("😃 Narren Project - 21 Bullets and Walls" , 900 , 50 ); 
  bullet.velocityX = speed;

  if ( hasCollided(bullet,wall) ) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  
    if (damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided (lbullet,lwall) {
  bRE = lbullet.x + lbullet.width;
  wLE = lwall.x;
  if (bRE >= wLE) {
    return true;
  }
  else {
    return false ;
  }
}
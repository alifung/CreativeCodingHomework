var r, g, b, a;

//orbit info
var d = 150; //distance


function setup() {
  createCanvas (800, 800);
  background (255);
  

}
function draw() {
  background(100, 1); //fade art!! yay abstract
  
  var a = random(0, 20); //angle
  
  //huh colors
  r = random(230, 255); 
  g = random(230, 255);
  b = random(230, 255);
  //? colors
  r2 = random(0, 10); 
  g2 = random(200 ,255);
  b2 = random(200, 255); 
  //wut colors
  r3 = random(0, 200); 
  g3 = random(190, 220); 
  b3 = random(180 ,250);  
  

  textSize(52);
  textFont("Helvetica");
  fill(r, g, b);
  text("huh", mouseX+d*cos(a), mouseY+d*cos(a));
  fill(r2, g2, b2);
  text("?", mouseX+d*cos(a), mouseY+d*sin(a));
  fill(r3, g3, b3, 200);
  text("wut", mouseX+d*cos(a), mouseY+d*cos(a)*-1);
  var velocityofthemouse = 50;
  a = a+(velocityofthemouse*.1);
}

function mousePressed()
{
  if(key=='') background(0);
}  

function keyReleased()
{
  if(key=='C') background(255);
}






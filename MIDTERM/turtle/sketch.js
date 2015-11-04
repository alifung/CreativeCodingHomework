// TURTLE GRAPHICS
// https://en.wikipedia.org/wiki/Turtle_graphics
// 
// this p5 sketch does a simple implementation of Seymour Papert's
// 'turtle graphics' package for LOGO.  using key commands, you can
// drive a turtle as it draws on the screen.
// 
// your tasks:
// (1) make the drawing system that the turtle drives around
// more interesting.  you can change the way lines work; you
// can have it plop down images instead of shapes; you can 
// have it set vertex points for shapes.
// (2) expand the turtle's vocabulary so it understands more 
// symbols than +, -, and F.  for example, a standard turtle
// typically will use lowercase 'f' for a move that *doesn't*
// draw (e.g. to leave a space).  it will also allow for branching
// symbols such as '[' and ']' so that the turtle can go on an
// expedition and 'teleport' back when a branch closes.  a simple
// thought would be to have the 'C' key change the turtle's drawing
// color.
// (3) find a way to make the turtle draw *automatically*, using
// the same system.  see the next sketch for an example of how that
// might be done.  :)

var turtpath = 'FnF++FrFrFrF--FFnF+FF-F-F--FFpF+FpF';
var startingpos = 0;

var x, y, r, g, b, a; //where be my turtle??

var currentangle = 270; // what angle is Hal going in when he starts?
var step = 90; //how big are his steps? this is in pixels!!
var angle = 75; //the angle of each turn + or -
var radius; //how big is da poop
var altangle = 45;


var automatic = 1;  // 1 = automatic mode; 0 = manual mode 



function setup()
{
  createCanvas(800,600);
  background(255);
  stroke(0, 0, 0, 255);
  
  poop = loadImage("./data/swirl.png"); //load poop luminati
  
  
  //lets start Hal up!!
  x = width/4;
  y = height/2; //this is his starting position!! halfway between total height and width
  
}

function draw(){
  
  
  /*KURLURSS
  var r = random(128, 255);//random for red
  var g = random(0, 192);
  var b = random(0, 50);
  var a = random(50, 100); //random alpha filter (opacity)
  
  //dungeons and dragons thing - like gaussian blur. Take three random values,
  //take the average, and then make the selected pixel the average. This one's
  //for the radius of the poop
  var radius = 0;
  radius+= random(0, 40);
  radius+= random(0, 40);
  radius+= random(0, 40);
  radius = radius/3;*/

  
  //draw the poop
  //fill(r, g, b, a); //random colors of the poop
  image(poop, x, y);
  
  
  //ellipse(x, y, radius, radius); //shape of the poop
  
  //the stuff that makes the Hal GO
  if (automatic == 1) {   // Automatic mode behavior
    goturtgo(turtpath.charAt(startingpos));//drop poop @ current location
    startingpos = (startingpos+1) % turtpath.length; //add the current character
  }
}

/*function keyTyped()
{
  if (key==' ') {
    automatic = !automatic;
    background(255);
    currentangle = 270;
    if (automatic) {
      step *= 2;  // step = step * .25;
      x = width/4;
      y = height/2;
    }
    else if (!automatic) {
      step *= .5;
      x = width/2;
      y = height/2;
    }
  }
}
 if (!automatic) {
    if (key=='F')//if I press F...
     console.log('key'); 
    {
      var x1 = x + step*cos(radians(currentangle));//because cos is x value, take the cos 
      //of the angle in radians and add it to x1 (position of where it was before)
      var y1 = y + step*sin(radians(currentangle));//cuz sin is y, take old y pos (y1)
      //and add the sin of the angle
      line(x, y, x1, y1); //connect the poops from current x, current y, from old x n y
      x = x1;
      y = y1; //this flips them around so that you can keep going 
    }
    else if(key=='+')
    {
      currentangle+=angle; //turn left. take angle he's already heading in, and then add the angle 
      //as defined in the beginning
    }
    else if(key=='-'){
      currentangle-=angle;//turn right. take angle already heading in, and add "angle" that I defined
    }
    else if(key=='1'){
    currentangle+=altangle; 
    }
    else if(key=='2'){
    currentangle-=altangle; 
    }
    else if(key=='3'){
    step==step*4; 
    }
}
*/
function goturtgo(input){
 // console.log('key'); //which key did I accidentally press?
  
  if (input=='F') //if I press F...
  {
    var x1 = x + step*cos(radians(currentangle));//because cos is x value, take the cos 
    //of the angle in radians and add it to x1 (position of where it was before)
    var y1 = y + step*sin(radians(currentangle));//cuz sin is y, take old y pos (y1)
    //and add the sin of the angle
    strokeWeight(2);
    stroke(r, g, b);
    line(x, y, x1, y1); //connect the poops from current x, current y, from old x n y
    x = x1;
    y = y1; //this flips them around so that you can keep going 
  }
  else if(input=='+'){
    currentangle+=angle; //turn left. take angle he's already heading in, and then add the angle 
    //as defined in the beginning
  }
  else if(input=='-'){
    currentangle-=angle;//turn right. take angle already heading in, and add "angle" that I defined
  }
  else if(input=='n'){
    noStroke();//
  }
  else if(input=='p'){//poop circles
    noStroke();
    fill (random(0, 255));
    ellipse(x, y, 60, 60);
  }
    else if(input=='r'){//poop other circles
    fill (random(0, 100));
    ellipse(x, y, 20, 20);
  }
}

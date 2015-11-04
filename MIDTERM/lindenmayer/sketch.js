//

//

// TURTLE:
var x, y; // the current position of the turtle
var currentangle = 0; // which way the turtle is pointing
var step = 35; // how much the turtle moves with each 'F'
var angle = 60; // how much the turtle turns with a '-' or '+'
var whereinstring = 0; 

// GRAPHICS STUFF;
var r, g, b, a; 
var radius; // width of circle



// LINDENMAYER STUFF (L-SYSTEMS)
var thestring = 'F'; // "axiom" or start of the string
var numloops = 3; // how many iterations of the L-system to pre-compute


function setup()
{
  createCanvas(800, 600); // this is the size of the window
  background(0); // background to white
  stroke(200, 220, 245, 180); // draw in black
  strokeWeight(5);
  
  // start the x and y position at lower-left corner
  x = width/2;
  y = height/2;
  
  // COMPUTE THE L-SYSTEM
  
  println(thestring);
  for(var i = 0;i<numloops;i++) {
    thestring = lindenmayer(thestring); // do the stuff to make the string
      println(thestring);
  }
  
}

// DO THIS EVERY FRAME
function draw()
{
  
  // draw the current character in the string:
  drawIt(thestring.charAt(whereinstring)); 
  
  // increment the point for where we're reading the string
  whereinstring++;
  if(whereinstring>thestring.length-1) whereinstring = 0;

}

// interpret an L-system
function lindenmayer(s)
{
  var outputstring = ''; // start a blank output string
  
  // go through the string, doing rewriting as we go
  for(var i=0;i<s.length;i++)
  {
    if(s.charAt(i)=='F')
    {
       outputstring+="FF+FF-FF+FF+FF+FF--FF+FF+NNN";
       //"FF+FF-FF+FF+FF+FF--FF+FF+NNN";

    }
    else
    {
       outputstring+= s.charAt(i); 
    }

  }
  
  return(outputstring); // send out the modified string
}



// this is a custom function that draws turtle commands
function drawIt(k)
{
   if(k=='F') // draw forward
   {
     var x1 = x + step*cos(radians(currentangle));
     var y1 = y + step*sin(radians(currentangle));
     line(x, y, x1, y1); // draw the line
     x = x1;
     y = y1;
     

     
   }
   else if(k=='+') // turn right
   {
     currentangle+=angle;
   }
   else if(k=='-') // turn left
   {
     currentangle-=angle;     
   }
   else if(k=='N')
   {
     noStroke();
     ellipse(x, y, radius, radius)
   }
   
   
  // draw the other crazy stuff:
  
  // give me some random values
  r = random(128, 255);
  g = random(110, 252);
  b = random(118, 250);
  a = random(50, 100);

  radius = 0;
  radius+= random(0, 30);
  radius+= random(0, 30);
  radius+= random(0, 30);
  radius = radius/3.;

  blendMode(DIFFERENCE);
  fill(r, g, b); // 
  ellipse(x, y, radius, radius); // circle 

}


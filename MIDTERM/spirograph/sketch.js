// SPIROGRAPH
// http://en.wikipedia.org/wiki/Spirograph
// also (for inspiration):
// http://ensign.editme.com/t43dances
//
// this p5 sketch uses simple transformations to create a
// Spirograph-like effect with interlocking circles (called sines).  
// press the spacebar to switch between tracing and
// showing the underlying geometry.
//
// your tasks:
// (1) tweak the code to change the simulation so that it draws something you like.
// hint: you can change the underlying system, the way it gets traced when you hit the space bar,
// or both.  try to change *both*.  :)
// (2) use p5.sound or tone.js to make the simulation MAKE SOUND.
// hint: the websites for p5.sound and tone.js have lots of examples.
// try and adapt them.
// another hint: javascript isn't super efficient with a large number of audio playing at once.
// see if there's a simple way to get an effective sound, or limit the number of shapes
// you're working with.
var osc;

var NUMSINES = 10; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable
var oscs = new Array(NUMSINES);

// play with these to get a sense of what's going on:
var fund = 0.002; // the speed of the central sine
var ratio = 2; // what multiplier for speed is each additional sine?
var alpha = 50; // how opaque is the tracing system

var trace = false; // are we tracing?

//var pitches = [40, 42, 44, 46, 48, 50, 52, 54, 56, 58];

function setup()
{
  createCanvas(800, 600); // OpenGL mode
  

  console.log (sines.length);
 

  rad = height/4; // compute radius for central circle
  background(0); // clear the screen

  for (i = 0; i<sines.length; i++)
  {
    sines[i] = PI*2; // start EVERYBODY facing NORTH
    oscs[i] = new p5.Oscillator();
    oscs[i].setType('sawtooth');
    oscs[i].freq(300+(i+200));
    oscs[i].amp(0.6);
    oscs[i].start();
  }
}

function draw()


{
  if (!trace) {
    background(0); // clear screen if showing geometry
    stroke(0, 255); // black pen
    fill(130, 60, 20, 90);
    //noFill(); // don't fill
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (i = 0; i<sines.length; i++) // go through all the sines
  {
    oscs[i].amp((sin(sines[i])*2.-1.)*.1);
    var erad = 40; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      blendMode(REPLACE);
      stroke(50*i);
      //stroke(255, 100, 200*(float(i)/sines.length), alpha); // blue
      //fill(230, 0, 255, alpha/2); // also, um, blue
      fill(60, 240, 200);//alpha/.5);
      erad = 10.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(0, 0, radius*20, radius*3); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    //if (!trace) ellipse(0, 0, 5, 5); // draw a little circle
    if (trace) ellipse(0, 0, erad*2, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation
  
}

function keyReleased()
{
  if (key==' ') {
    trace = !trace; 
    background(0);
  }
}


var bart; // this is gonna hold the text file

var currentline = '';

var bartpositions = new Array();
var bartsizes = new Array();

var osc;
var thenotes = [62, 62, 64, 62, 67, 66, 62, 62, 64, 62, 69, 67, 62, 62, 74, 71, 67, 66, 64, 72, 72, 71, 67, 69, 67];


function preload() {
  bart = loadStrings('./bartt.txt');
  theFont = loadFont('./myFont.ttf'); // loads a font from the disk
}

function setup() {
  createCanvas(800, 900);
  osc = new p5.Oscillator();
  osc.setType('circle');
  osc.start();
  doit();

  
}

function draw() {
  
background(108, 172, 231);

var xposition = 0; // where on the x am i typing?

var thefreq = miditoFreq(thenotes[floor(random(0, thenotes.length))]);
osc.freq(thefreq);
var increment = map(mouseX, 0, width, 0.05. 0.3);
osc.amp(theamp, 0.1); 



for (var i = 0; i < currentline.length; i++) {
  fill(255, random(50, 255));
  textFont(theFont, bartsizes)
  textSize(bartsizes[i]);
  text(currentline.charAt(i), xposition, bartpositions[i]);
  xposition+=textWidth(currentline.charAt(i));
  bartpositions[i] += random(1, 5);
  }
  noStroke();
fill(206, 219, 239);
ellipse(mouseX+0, 80, 100, 100);
ellipse(mouseX+200, 30, 100, 100);
ellipse(mouseX+70, 110, 100, 100);
ellipse(mouseX+30, 20, 100, 100);
ellipse(mouseX+30, 40, 100, 100);
ellipse(mouseX+130, 100, 100, 100);
ellipse(mouseX+195, 90, 100, 100);
ellipse(mouseX+20, 100, 100);
ellipse(mouseX+230, 60, 100, 100);
ellipse(mouseX+120, 40, 100, 100);
      
fill(155, 175, 207); //100
ellipse(mouseX+100, 180, 100, 100);
ellipse(mouseX+300, 130, 100, 100);
ellipse(mouseX+170, 210, 100, 100);
ellipse(mouseX+130, 120, 100, 100);
ellipse(mouseX+130, 140, 100, 100);
ellipse(mouseX+230, 200, 100, 100);
ellipse(mouseX+295, 190, 100, 100);
ellipse(mouseX+220, 200, 100, 100);
ellipse(mouseX+330, 160, 100, 100);
ellipse(mouseX+220, 140, 100, 100);
      
fill(216, 230, 251);//i added 600
ellipse(mouseX+600, 80, 100, 100);
ellipse(mouseX+800, 30, 100, 100);
ellipse(mouseX+670, 110, 100, 100);
ellipse(mouseX+630, 20, 100, 100);
ellipse(mouseX+630, 40, 100, 100);
ellipse(mouseX+730, 100, 100, 100);
ellipse(mouseX+795, 90, 100, 100);
ellipse(mouseX+620, 100, 100, 100);
ellipse(mouseX+830, 60, 100, 100);
ellipse(mouseX+720, 40, 100, 100);
      
fill(192, 210, 237); //3rd cloud
ellipse(mouseX+350, 150, 100, 100);
ellipse(mouseX+550, 100, 100, 100);
ellipse(mouseX+420, 170, 100, 100);
ellipse(mouseX+380, 100, 100, 100);
ellipse(mouseX+380, 110, 100, 100);
ellipse(mouseX+480, 170, 100, 100);
ellipse(mouseX+545, 160, 100, 100);
ellipse(mouseX+370, 140, 100, 100);
ellipse(mouseX+580, 130, 100, 100);
ellipse(mouseX+470, 110, 100, 100); 

//if (xposition > height) {
//  doit();
//  } why does this not work



}
function keyReleased() {
  doit();

}

function doit() {
  var whichline = floor(random(0, bart.length)); // pick a new line
  currentline = bart[whichline]; 
  bartpositions = new Array(currentline.length);
  bartsizes = new Array(currentline.length);
  for (var i = 0; i<currentline.length; i++) {
    bartpositions[i] = 100;
    bartsizes[i] = random(12, 45);
  }
}
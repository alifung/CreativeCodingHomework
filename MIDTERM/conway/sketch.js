
var threshold = 200;
var howwide = 100;
var howtall = 100;
var img = new Array(2); // this is gonna store two images
var whichimage = 0;
var blackcolor = (255);
function preload() {
  img[0] = loadImage('./data/snail.jpg');
  img[1] = loadImage('./data/snail.jpg');
}
function setup() {
  createCanvas(600, 600);
  noSmooth();
}
function draw() {
  img[whichimage].loadPixels(); // load pixels into memory
  img[1-whichimage].loadPixels(); // load pixels into memory
  for (var i = 0; i < howwide; i++) {
    for (var j = 0; j < howtall; j++) {
      // read red pixels from source image:
      var p0 = img[whichimage].get(i-1, j-1)[0]>threshold; // upper left
      var p1 = img[whichimage].get(i, j-1)[0]>threshold; // upper mid
      var p2 = img[whichimage].get(i+1, j-1)[0]>threshold; // upper right
      var p3 = img[whichimage].get(i-1, j)[0]>threshold; // left
      var p4 = img[whichimage].get(i, j)[0]>threshold; // center pixel
      var p5 = img[whichimage].get(i+1, j)[0]>threshold; // right
      var p6 = img[whichimage].get(i-1, j+1)[0]>threshold; // lower left
      var p7 = img[whichimage].get(i, j+1)[0]>threshold; // lower mid
      var p8 = img[whichimage].get(i+1, j+1)[0]>threshold; // lower right
      var neighbors = p0+p1+p2+p3+p5+p6+p7+p8;
      var result;
      if(p4==1) // center pixel is alive
      {
        if(neighbors ==2|| neighbors==3 || neighbors==4) result = 1; else result = 0;
      }
      else // center pixel is DEAD
      {
        if(neighbors==3) result = 1; else result = 0;
      }
     // write pixels into destination image:
     if(result == 0) {
      img[1-whichimage].set(i, j, color(100,210,240,10)); 
     }
     else {
      img[1-whichimage].set(i, j, color(255));
     }
       
     }
  }
  img[1-whichimage].updatePixels(); // update pixels on destination

  whichimage = 1-whichimage; // flip source and destination
  image(img[whichimage], 0, 0, width, height); // draw the new source
}
function mouseDragged()
{
  img[whichimage].loadPixels();
  var thex = floor(mouseX/6.0);
  var they = floor(mouseY/6.0);
  img[whichimage].set(thex, they, color(blackcolor));
  img[whichimage].updatePixels();
}
function keyReleased() // blow out the image with new stuff
{
  img[whichimage].loadPixels(); // load pixels into memory
  img[1-whichimage].loadPixels(); // load pixels into memory
  for (var i = 0; i < img[whichimage].width; i++) {
    for (var j = 0; j < img[whichimage].height; j++) {
      var r = random(10)>8; // true or false?
      var thecolor = color(r*blackcolor);
      img[whichimage].set(i, j, thecolor);
      img[1-whichimage].set(i, j, thecolor);
    }
  }
  img[whichimage].updatePixels(); // update pixels
  img[1-whichimage].updatePixels(); // update pixels
}
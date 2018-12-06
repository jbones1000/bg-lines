var s1, s2, s1x, s1y, s2x, s2y, s1color, s2color, s1click, s2click, s1size, s2size;



function preload() {
  //new song('assets/sounds/lckdGroov-1.mp3',[successCallback],[errorCallback],[whileLoadingCallback])
  soundFormats('mp3', 'ogg')
  s1 = loadSound('assets/sounds/lckdGroov-1.mp3');
  s2 = loadSound('assets/sounds/lckdGroov-1.mp3');
}

function setup() {
  var canvas = createCanvas(1200, 1200);
  canvas.parent('sketch-holder');
  s1x = 0;
  s1y = 10;
  s2x = 600;
  s2y = 10;
  s1size = 300;
  s2size = 300;
  s1color = ["255","0","75"];
  s2color = ["0","25","255"];


}
function draw() {
   var haha1 = int(s1.currentTime()*(100 / s1.duration()));
   var haha2 = int(s2.currentTime()*(100 / s2.duration()));
   background(255,255,255,255);
   noStroke();
   fill(s1color);
   rect(s1x, s1y, s1size, s1size);
   
   noStroke();
   fill(255);
   rect(s1x + 10, s1y + 10, s1size-20, s1size-20);
   
   noStroke();
   fill(s2color);
   rect(s2x, s2y, s2size, s2size);
   
   noStroke();
   fill(255);
   rect(s2x + 10, s2y + 10, s2size-20, s2size-20);
   
   textSize(20);
   stroke(0);
   textAlign(LEFT);
   text("Locked Groove-2. 2017", 60, 100);
   fill(r2,g2,b2);
   text(haha2, 450, 180);
   text("Locked Groove-1. 2017", 450, 150);
   
}


function mousePressed() {
  if ( mouseX >= s1x && mouseX <= (s1x*4) &&
    mouseY >= s1y && mouseY <= (s1y*4))  {
    if ( s1.isLooping() ) { // .isPlaying() returns a boolean
    
      s1color = ["50","50","50"];
      s1.stop();
    } else {
    
      s1color = ["0","255","255"];
      s1.play();
      s1.loop();
    }
  } else {
    return false;
  }
}
/*function mousePressed() {
if ( mouseX >= s2x && mouseX <= (s2x*4) &&
    mouseY >= s2y && mouseY <= (s2y*4))  {
    if ( s2.isLooping() ) { // .isPlaying() returns a boolean
    
     s2color = ["50","50","50"];
     s2.stop();
    } else {
    
      s2color = ["0","255","255"];
      s2.play();
      s2.loop();
    }
  }
  else {
  return false;
  }
}
  


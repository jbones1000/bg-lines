var song1, song2, song1x, song1y, song2x, song2y, r1, g1, b1, r2, g2, b2;



function preload() {
  //new song('assets/sounds/lckdGroov-1.mp3',[successCallback],[errorCallback],[whileLoadingCallback])
  soundFormats('mp3', 'ogg')
  song1 = loadSound('assets/sounds/lckdGroov-1.mp3');
  song2 = loadSound('assets/sounds/lckdGroov-1.mp3');
}

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  song1x = 200;
  song1y = 100;
  song2x = 200;
  song2y = 100;
 
  slider = createSlider(0, 4, 1, 0.08333333);
  slider.position(300, 300);
  slider.style('width', '80px');
  
  r1 = 255;
  g1 = 255;
  b1 = 255;
  r2 = 255;
  g2 = 255;
  b2 = 255;
}

function play3() {
  song1.jump(0);
  song2.jump(0);
}
function play1() {
  if ( song1.isLooping() ) { // .isPlaying() returns a boolean
    
    
    r1 = 255;
    g1 = 255;
    b1 = 255;
    song1.stop();
    } else {
    
    r1 = 245;
    g1 = 245;
    b1 = 20;
    song1.play();
    song1.loop();
    
    }
  }
function play2() {
  if ( song2.isLooping() ) { // .isPlaying() returns a boolean
    
    
    r2 = 255;
    g2 = 255;
    b2 = 255;
    song2.stop();

    } else {
    
    r2 = 245;
    g2 = 245;
    b2 = 20;
    song2.play();
    song2.loop();
   
    }
  }


function draw() {
   var haha1 = int(song1.currentTime()*100);
   var haha2 = int(song2.currentTime()*100);
   var speed = slider.value();
   song2.rate(speed);
   background(255,255,255,255);
   noStroke();
   fill(r1,g1,b1);
   rect(40, 80, 120, 120);
   fill(r2,g2,b2);
   rect(400, 80, 120, 120);
   fill(0,0,0);
   stroke(0);
   textSize(12);
   textAlign(CENTER);
   text(haha1, 100, 180);
   text(haha2, 450, 180);
   textSize(16);
   textAlign(CENTER);
   text("Locked Groove-2. 2017", 100, 150);
   text("Locked Groove-1. 2017", 450, 150);
   
   
   
   
}
var song1, song2, r1, g1, b1, r2, g2, b2;



function preload() {
  //new song('assets/sounds/lckdGroov-1.mp3',[successCallback],[errorCallback],[whileLoadingCallback])
  soundFormats('mp3', 'ogg')
  song1 = loadSound('assets/sounds/lckdGroov-1.mp3');
  song2 = loadSound('assets/sounds/lckdGroov-1.mp3');
}

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  button1 = createButton('click');
  button2 = createButton('click');
  button1.position(75, 110);
  button2.position(425,110);
  button1.mousePressed(play1);
  button2.mousePressed(play2);
  r1 = 255;
  g1 = 255;
  b1 = 255;
  r2 = 255;
  g2 = 255;
  b2 = 255;
}

function loop() {
  if ( song1.isPlaying() ) { // .isPlaying() returns a boolean
    song1.stop();
    r1 = 255;
    g1 = 255;
    b1 = 255;
   } else {
    song1.play();
    r1 = 235;
    g1 = 235;
    b1 = 0;
   }
  }
function play2() {
  if ( song2.isPlaying() ) { // .isPlaying() returns a boolean
    song2.stop();
    r2 = 255;
    g2 = 255;
    b2 = 255;
   } else {
    song2.play();
    r2 = 235;
    g2 = 235;
    b2 = 0;
   }
  }

function draw() {
   var haha1 = int(song1.currentTime()*100);
   var haha2 = int(song2.currentTime()*100);
   background(255,255,255,40);
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
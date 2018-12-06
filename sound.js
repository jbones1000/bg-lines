var s1, s2, color1, color2, gwidth, gheight, x1,y1, x2, y2
function preload() {
  /*new song('assets/sounds/lckdGroov-1.mp3',[successCallback],[errorCallback],[whileLoadingCallback])*/
  soundFormats('mp3', 'ogg');
  s1 = loadSound('assets/sounds/chord-loop2.mp3');
  s2 = loadSound('assets/sounds/kick1.mp3');
}

function setup() {
  var canvas = createCanvas(1200, 1200);
  canvas.parent('sketch-holder');
  gwidth = 300;
  gheight = 300;
  x1 = 20;
  y1 = 100;
  x2 = 800;
  y2 = 100;
  
  color1 = ["255","0","75"];
  color2 = ["0","25","255"];

}
function mousePressed() {
if ( mouseX >= x1 && mouseX <= (x1+gwidth) &&
    mouseY >= y1 && mouseY <= (y1+gheight))  {
  playfunk1();
  }
  else {
    if ( mouseX >= x2 && mouseX <= (x2+gwidth) &&
    mouseY >= y2 && mouseY <= (y2+gheight))  {
      playfunk2();
      }
    }
}

function blocker(song, x, y, width, height, color, title) {
  var haha = int(1+song.currentTime()*(( width*0.75) / song.duration()));
  
  noStroke();
  fill(color);
  rect(x, y, width, height);
   
  noStroke();
  fill(255);
  rect(x + (width*0.05), y + (height*0.05), width*0.9, height*0.9);

  noStroke();
  fill(color);
  rect(x + (width/8), y + (height*0.75), haha, height/8);

  textSize(20);
  stroke(0);
  textAlign(CENTER);
  fill(color);
  text(title, x + (width/2), y + ((y*0.8)+ 20));
  
}
  
function draw() {
  background(255,255,255,255)
  blocker(s1, x1, y1, gwidth, gheight, color1, "chord-loop2");
  blocker(s2, x2, y2, gwidth, gheight, color2, "kick1");
}

function playfunk1() {
    if ( s1.isPlaying() ) { // .isPlaying() returns a boolean
    s1.pause();
    color1 = ["255","0","75"];
   } else {
    s1.loop();
    color1 = ["0","25","255"];
   }
}
  
function playfunk2() {
    if ( s2.isPlaying() ) { // .isPlaying() returns a boolean
    s2.pause();
    color2 = ["255","0","75"];
   } else {
    s2.loop();
    color2 = ["0","25","255"];
   }
}
  
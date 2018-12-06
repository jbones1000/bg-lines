var s1, s2, s1color, s2color


function preload() {
  //new song('assets/sounds/lckdGroov-1.mp3',[successCallback],[errorCallback],[whileLoadingCallback])
  soundFormats('mp3', 'ogg')
  s1 = loadSound('assets/sounds/lckdGroov-1.mp3');
  s2 = loadSound('assets/sounds/lckdGroov-1.mp3');
}

function setup() {
  var canvas = createCanvas(1200, 1200);
  canvas.parent('sketch-holder');
  s1color = ["255","0","75"];
  s2color = ["0","25","255"];
}

function block(song, x, y, width, height, color) {
  var haha = int(song.currentTime()*(x-40 / song.duration()));
  

  noStroke();
  fill(color);
  rect(x, y, width, height);
   
  noStroke();
  fill(255);
  rect(x + 10, y + 10, width-20, height-20);

  noStroke();
  fill(color);
  rect(x + 15, y + (y / 5)*5, haha, 5);

  textSize(20);
  stroke(0);
  textAlign(CENTER);
  fill(color);
  text("poop", x + 20, y + 20);

}

function draw() {
  background(255,255,255,255)
  rect(100,100,50,50);
  
  block(s1, 20, 20, 800, 600, 200);
   
}


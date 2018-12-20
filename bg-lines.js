var array1 = []
var arrayNum, xamt, yamt, r, g, b

function setup() {
  var myCanvas = createCanvas(1600, 800);
  myCanvas.parent('myContainer');
  xamt = parseInt(width/100);
  yamt = parseInt(height/100);
  r = parseInt(random(50, 250));
  g = parseInt(random(50, 250));
  b = parseInt(random(50, 250));
  var arrayNum = 3*(xamt+yamt);
  //var array1 = Array(arrayNum);
  for (var x = 0; x < arrayNum; x++) {
       array1[x] = parseInt(random(-20,20));
       }
  background(255,255,255,0);
  noLoop();
}

function draw() {
  
  
  for (var x = 0; x < 12; x++) {
    for (var y = 0; y < 8; y++) {
    stroke(234,123,245,175);
    strokeWeight(2);
    
    line((x*100)+(array1[x]*40), (y*100)+(array1[y+1]*20), 
         (x*100)+(array1[x+2]*40), (y*100)+(array1[y+3]*20))
       }
  }
}




var array1 = []
var arrayNum 

function setup() {
  var myCanvas = createCanvas(1200, 800);
  myCanvas.parent('myContainer');
  var arrayNum = 3*(parseInt(width/100) + parseInt(height/100));
  //var array1 = Array(arrayNum);
  for (var x = 0; x < arrayNum*3; x++) {
       array1[x] = parseInt(random(-20,20));
       }
  background(255);
  noLoop();
}

function draw() {
  background(255);
  
  for (var x = 0; x < 12; x++) {
    for (var y = 0; y < 8; y++) {
    stroke(234,123,245);
    strokeWeight(1);
    
    line((x*100)+(array1[x]*100), (y*100)+(array1[y+1]*100), 
         (x*100)+(array1[x+2]*200), (y*100)+(array1[y+3]*150))
       }
  }
}




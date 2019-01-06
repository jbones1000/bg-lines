var array1 = []
var arrayNum, xamt, yamt, r, g, b, j, js, xs, df

function setup() {
  var myCanvas = createCanvas(1600, 800);
  j = 1;
  js = 1;
  xs = 1;
  df = 1;
  myCanvas.parent('myContainer');
  xamt = parseInt(width/50);
  yamt = parseInt(height/50);
  r = parseInt(random(50, 250));
  g = parseInt(random(50, 250));
  b = parseInt(random(50, 250));
  var arrayNum = xamt*yamt;
  //var array1 = Array(arrayNum);
  for (var x = 0; x < arrayNum; x++) {
       array1[x] = parseInt(random(0,3));
       }
  background(255,255,255,100);
  
  
}

function draw() {
  
  for (var x = 0; x < xamt; x++) {
    for (var y = 0; y < yamt; y++) {
        
        stroke(r,g,b,175);
        strokeWeight(1);
        
        if (array1[x+(y*10)] == 0) {
          
          line(x*50,y*50,(x*50)+50,y*50);
          }
          else if (array1[x+(y*10)] == 1) {
            strokeWeight(2);
            line((x*50)+50,y*50,(x*50)+50,(y*50)+50);
          }
          else if (array1[x+(y*10)] == 2) {
            
            line(x*50,(y*50)+50,(x*50)+50,y*50);
          }
          else {
            strokeWeight(2);
            line(x*50,y*50,x*50,(y*50)+50);
          }
    }
  }
  noLoop();
}








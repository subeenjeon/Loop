function setup() {
  createCanvas(640, 480);
  background(246, 153, 136);
  noFill();

  stroke(255, 255, 255);

  var x;
/*
  x = 1;
  ellipse(x * 150, 100, 50, 50);
  
  x = 2;
  ellipse(x * 150, 100, 50, 50);
 
  x = 3;
  ellipse(x * 150, 100, 50, 50);
*/
  for (var x = 1; x <=5; x++)
  {
    ellipse(x * 100, 100, 50, 50);
  }
}
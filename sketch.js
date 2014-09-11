function setup() {
  createCanvas(640, 480);
  
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
}



function draw() {
  background(246, 153, 136);
//for (시작상태; 반복하는 조건; 증가값)
  for (var x = 1; x <=5; x++)
  {
    ellipse(x * 100, x  * 30 + 100, x * 20, x * 20);
  }

  var size = Math.abs(mouseX - 320);

  ellipse(320, 240, );
}  
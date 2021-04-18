var hr, mn, sc;
var hourHand;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();
 
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  stroke("blue");
  noFill();
  arc(0,0,300,300,0,scAngle);

  strokeWeight(10);
  stroke("red");
  noFill();
  arc(0,0,275,275,0,mnAngle);

  strokeWeight(10);
  stroke("yellow");
  noFill();
  arc(0,0,250,250,0,hrAngle);


  drawSprites();
}
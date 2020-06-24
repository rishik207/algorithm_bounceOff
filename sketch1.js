var fr,mr;


function setup() {
  createCanvas(1350,650);
  fr = createSprite(400, 200, 50, 50);
  mr = createSprite(400, 200, 50, 50);

  mr.shapeColor = "green";
  fr.shapeColor = "green";

  //mr.debug = true;
  //fr.debug = true;
}

function draw() {
  background(255,255,255);
  
  if((mr.x - fr.x < mr.width/2 + fr.width/2) && 
  (fr.x - mr.x < fr.width/2 + mr.width/2) && 
  (mr.y - fr.y < mr.height/2 + fr.height/2) && 
  (fr.y - mr.y < mr.height/2 + fr.height/2)) {
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else {
  mr.shapeColor = "green";
  fr.shapeColor = "green";
  }
  mr.x = mouseX;
  mr.y = mouseY;

  drawSprites();
}
var Car,Wall;
var Speed, Weight;

function setup() {
  createCanvas(1600,400);

  Car = createSprite(200, 200, 50, 50);
  Wall = createSprite(1200, 200, 60, 100);

  Car.velocityX = 5;

  Speed = random(25,31);
  Weight = random(400,1500);

}

function draw() {
  background("black"); 
  
  if(Wall.x-Car.x < (Car.width+Wall.width)/2){
    Car.velocityX = 0;
    var deformation = 0.5 *Weight*Speed*Speed/22509;
    if(deformation>180) {
      Car.shapeColor = color("yellow");
      Wall.shapeColor = color("white");
    }
    if(deformation<180 && deformation>100) {
      Car.shapeColor = color("green");
      Wall.shapeColor = color("white");
    }
    if(deformation<100) {
      Car.shapeColor = color("red");
      Wall.shapeColor = color("white");
    }

  }


  drawSprites();
}
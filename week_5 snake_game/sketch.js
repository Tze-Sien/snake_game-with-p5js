let snake;
let scl = 30;
let food;

// This is a setup function from p5js
function setup() {
  // 1. Creating a canvas with p5js function 
  createCanvas(600,600); 
  // 2. Set the frame rate to what you like
  frameRate(10);
  // 3. Creating a new Snake Object
  snake = new Snake();
  // 4. Randomly pick a location for the food
  pickLocation();
  
}


function pickLocation() {
  // Seperate the whole canvas into grid
  // width = width of canvas 
  // height = height of canvas
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  // Creating a vector with p5js
  food = createVector(floor(random(cols)), floor(random(rows)));
  //p5js provide mult in vector to adjust the thickness of the vector
  food.mult(scl); 
}

// This will continuous to loop according to frameRate per second
function draw() {

  // Continuously update the background, and snake
  background(50, 0 ,50); 
  snake.update();
  snake.show();

  // If the snake eaten the food
  if(snake.eat(food)){
    pickLocation();
  }

  // Setup the fill color for the snake
  fill(255,0,100);
  // Draw the snake, (location x, location y , thickness, thickness)
  rect(food.x, food.y,scl, scl);

}

// Basic Vanilla JS to control the movement of Snake
function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.dir(0, -1);
  }else if(keyCode === DOWN_ARROW){
    snake.dir(0, 1);
  }else if(keyCode === RIGHT_ARROW){
    snake.dir(1, 0);
  }else if(keyCode === LEFT_ARROW){
    snake.dir(-1 , 0);
  }
}


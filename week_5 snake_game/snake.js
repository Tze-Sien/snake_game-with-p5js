function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    // Check if the snake eaten the food, if yes, body length + 1
    this.eat = function(pos){
        let d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
            this.total++;
            return true;
        }else{
            return false;
        }
    }
    
    // Controlling the direction of next move
    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    // Update the snake body
    this.update = function() {
        
        // To make the snake move we need to 
        // 1. Remove the first element from tail
        // 2. Move every element in the array to front 
        if(this.total == this.tail.length) {
            for( let i =  0; i< this.tail.length - 1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        // 3. Adding a new element to the array
        this.tail[this.total-1] = createVector(this.x, this.y)

        // Updating the latest head location
        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        // So that it stops when touching the edge
        this.x = constrain(this.x, 0 , width-scl);
        this.y = constrain(this.y, 0 , height-scl);
    }
  
    this.show = function() {
        fill(255);
        // Show the tail out if there is any
        for( let i =  0 ; i < this.tail.length ; i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl)
        }
        // Show the head
        rect(this.x, this.y, scl, scl);
    }
  }
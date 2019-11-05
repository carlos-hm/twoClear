class Board {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.img = new Image();
        this.img.src = images.bg;
    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Laser {
    constructor() {
        this.imgRed = new Image();
        this.imgRed.src = images.laserR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.laserG;
    }
    drawRed(){
        ctx.drawImage(this.imgRed, 200, 400, 300, 100);
    }
    drawGreen(){
        ctx.drawImage(this.imgGreen, 500, 400, 100, 300);
    }
}

class Goal {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.imgRed = new Image();
        this.imgRed.src = images.goalR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.goalG;
    }
    drawRed(){
        ctx.drawImage(this.imgRed, 600, 400, this.width, this.height);
    }
    drawGreen(){
        ctx.drawImage(this.imgGreen, 300, 300, this.width, this.height);
    }
}

class Control {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.imgRed = new Image();
        this.imgRed.src = images.controlR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.controlG;
    }
    drawRed(){
        ctx.drawImage(this.imgRed, 400, 500, this.width, this.height);
    }
    drawGreen(){
        ctx.drawImage(this.imgGreen, 200, 100, this.width, this.height);
    }
}


class Player {
    constructor(){
        this.width = 100;
        this.height = 100;
        this.x = 600;
        this.y = 600;
        // this.xGreen = 0;
        // this.yGreen = 600;
        this.vx = 0;
        this.vy = 0;
        this.position = 0;
        this.imgRed = new Image();
        this.imgRed.src = images.playerR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.playerG;
    }
    drawRed(){
        //X
        if (this.x > canvas.width - this.width) {
            this.x = canvas.width - this.width
          } else if (this.x <= 0){
            this.x = 0;  
          }
        //Y
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
        } else if (this.y <= 0) {
            this.y = 0;
        }

        ctx.drawImage(this.imgRed, this.x, this.y, this.width, this.height);
    }
    
    drawGreen(){
        //X
        if (this.x > canvas.width - this.width) {
            this.x = canvas.width - this.width
          } else if (this.x <= 0){
            this.x = 0;  
          }
        //Y
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
        } else if (this.y <= 0) {
            this.y = 0;
        }
        ctx.drawImage(this.imgGreen, this.x, this.y, this.width, this.height);
    }
    
    moveLeft(){
        this.x -= 100;
    }
    moveRight(){
        this.x += 100;
    }
    moveUp(){
        this.y -= 100;
    }
    moveDown(){
        this.y += 100;
    }
    
    isTouching(obstacle) {
        return (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x && 
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        )
    }
}
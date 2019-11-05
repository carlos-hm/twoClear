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
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.imgRed = new Image();
        this.imgRed.src = images.laserR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.laserG;
    }
    draw(){
        if(this.color === 'red') {
            ctx.drawImage(this.imgRed, this.x, this.y, this.width, this.height);
        } else if (this.color === 'green') {
            ctx.drawImage(this.imgGreen, this.x, this.y, this.width, this.height);
        }
    }
}

class Goal {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 100;
        this.height = 100;
        this.imgRed = new Image();
        this.imgRed.src = images.goalR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.goalG;
    }
    draw() {
        if(this.color === 'red') {
            ctx.drawImage(this.imgRed, this.x, this.y, this.width, this.height);
        } else if(this.color === 'green') {
            ctx.drawImage(this.imgGreen, this.x, this.y, this.width, this.height);
        }
    }
}

class Control {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 100;
        this.height = 100;
        this.imgRed = new Image();
        this.imgRed.src = images.controlR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.controlG;
    }
    draw(){
        if(this.color === 'red'){
            ctx.drawImage(this.imgRed, this.x, this.y, this.width, this.height);
        } else if (this.color === 'green') {
            ctx.drawImage(this.imgGreen, this.x, this.y, this.width, this.height);
        }
    }
}


class Player {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 100;
        this.height = 100;
        this.vx = 0;
        this.vy = 0;
        this.side = '';
        this.position = 0;
        this.imgRed = new Image();
        this.imgRed.src = images.playerR;
        this.imgGreen = new Image();
        this.imgGreen.src = images.playerG;
    }
    draw(){
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
        if(this.color === 'red') {
            ctx.drawImage(this.imgRed, this.x, this.y, this.width, this.height);
        } else if(this.color === 'green') {
            ctx.drawImage(this.imgGreen, this.x, this.y, this.width, this.height);
        }
    }
    moveLeft(obstacle){
        if(this.x == obstacle.x + 100 && this.y >= obstacle.y){
            console.log('aqui menos')
        }else {
            this.x -=100
        }
        
    }
    moveRight(obstacle){
        if(this.x == obstacle.x - 100 && this.y >= obstacle.y){
            console.log('aqui no mayfriend')
        } else {
            this.x += 100;
        }
        
    }
    moveUp(obstacle){
        if(this.y == obstacle.y && this.x == obstacle.x){
           console.log('nel')
        } else{
            this.y -= 100;
        }
        
    }
    moveDown(obstacle){    
        if(this.y == obstacle.y - 100 && this.x ==obstacle.x){
            console.log('nel')
        } else {
            this.y += 100;
        }
        
    }
    isTouching(obstacle) {
        // if (this.x === obstacle.x + obstacle.width && this.y >= obstacle.y ) {
        //     return this.side = 'right';
        // }
        // if (this.x === obstacle.x && this.y >= obstacle.y ) {
        //     return this.side = 'left';
        // }
        // else if (this.x == obstacle.x && this.y > obstacle.y) {
        //     this.side = 'left'
        // }

        //ESTE SIRVE 
        if(this.x == obstacle.x && this.y >= obstacle.y){
            return this.side = 'left';
        }
         else if(this.x == obstacle.x && this.y >= obstacle.y) {
            return this.side = 'right';
        }

        // this.x < obstacle.x + obstacle.width && 
        //     this.y  > obstacle.height


        // return (
        //     this.x < obstacle.x + obstacle.width &&
        //     this.x + this.width > obstacle.x && 
        //     this.y < obstacle.y + obstacle.height &&
        //     this.y + this.height > obstacle.y
        // )
    }
    isGoal(goal){
        if(this.x === goal.x && this.y === goal.y){
            return true;
        }
    }
    onControl(control){
        if(this.x === control.x && this.y === control.y){
            return true;
        }
    }
}
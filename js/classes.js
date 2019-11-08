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

class Win {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.starsX = 100;
        this.starsY = 400;
        this.starsWidth = 626;
        this.starsHeight = 185;
        this.width = 800;
        this.height = 700;
        this.imgWin01 = new Image();
        this.imgWin01.src = images.win01;
        this.imgWin02 = new Image();
        this.imgWin02.src = images.win02;
        this.imgWin03 = new Image();
        this.imgWin03.src = images.win03;
    }
    draw(){  
        if(moves <= 42){
            ctx.drawImage(this.imgWin03, this.x, this.y, this.width, this.height);
        } else if (moves > 42 && moves <= 46){
            ctx.drawImage(this.imgWin02, this.x, this.y, this.width, this.height);
        } else if (moves > 46){
            ctx.drawImage(this.imgWin01, this.x, this.y, this.width, this.height);
        }

        ctx.font = '50px Montserrat'
        ctx.fillStyle = '#707070'
        ctx.fillText(`${moves} moves`, 285, 580)
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
        this.imgBlack = new Image();
        this.imgBlack.src = images.blackH;
    }
    draw(){
        if(this.color === 'red') {
            ctx.drawImage(this.imgRed, this.x, this.y, this.width, this.height);
        } else if (this.color === 'green') {
            ctx.drawImage(this.imgGreen, this.x, this.y, this.width, this.height);
        } else if (this.color === 'black'){
            ctx.drawImage(this.imgBlack, this.x, this.y, this.width, this.height);
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
        let free = true
        obstacle.forEach((element) => {
            if(element.color == 'black') {
                if(this.x == element.x + 100 && this.y == element.y){
                    free = false
                    return console.log('black')
                }
            } else if (element.color == 'green' && this.color == 'red') {
                if(this.x == element.x + 100 && this.y == element.y){
                    free = false
                    return console.log('green')
                }
            } else if (element.color == 'red' && this.color == 'green') {
                if(this.x == element.x + 100 && this.y == element.y){
                    free = false
                    return console.log('red')
                }
            }
        })   
        if (free) {
            this.x -=100
            if(this.x >= 0){
                moves++;
                console.log(moves);
            }  
        }   
    }
    moveRight(obstacle){
        let free = true;
        obstacle.forEach((element) => {
            if(element.color == 'black') {
                if(this.x == element.x - 100 && this.y == element.y){
                    free = false;
                    return console.log('black');
                }
            } else if (element.color == 'green' && this.color == 'red'){
                if(this.x == element.x - 100 && this.y == element.y){
                    free = false;
                    return console.log('green');
                }
            } else if (element.color == 'red' && this.color == 'green') {
                if(this.x == element.x - 100 && this.y == element.y){
                    free = false;
                    return console.log('red');
                }
            }
        })
        if (free) {
            this.x += 100;
            if(this.x < 800){
                moves++;
                console.log(moves);
            };
        }
    }

    moveUp(obstacle){
        let free = true;
        obstacle.forEach((element) => {
            if(element.color == 'black') {
                if(this.y == element.y + 100 && this.x == element.x){
                    free = false;
                    return console.log('black')
                } 
            } else if (element.color == 'green' && this.color == 'red'){
                if(this.y == element.y + 100 && this.x == element.x){
                    free = false;
                    return console.log('green')
                } 
            } else if (element.color == 'red' && this.color == 'green'){
                if(this.y == element.y + 100 && this.x == element.x){
                    free = false;
                    return console.log('red')
                } 
            }
        });
        if(free) {
            this.y -= 100;
            if(this.y > 0){
                moves++;
                console.log(moves);
            }   
        }
            
    }
    moveDown(obstacle){
        let free = true;
        obstacle.forEach((element) => {
            if(element.color == 'black'){
                if(this.y == element.y - 100 && this.x == element.x ){
                    free = false;
                    console.log('black')
                }
            } else if (element.color == 'green' && this.color == 'red') {
                if (this.y == element.y - 100 && this.x == element.x ){
                    free = false;
                    console.log('green')
                }
            } else if (element.color == 'red' && this.color == 'green') {
                if (this.y == element.y - 100 && this.x == element.x ){
                    free = false;
                    console.log('red')
                }
            }
        })
        if(free) {
            this.y += 100;
            if(this.y < 700){
                moves++;
                console.log(moves);
            }  
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
    onGoal(goal){
        if(this.x === goal.x && this.y === goal.y){
            //console.log('sii')
            return true;
        }
    }

    

    onControl(control){
       
        if(this.x === control.x && this.y === control.y && this.color == 'green' && control.color == 'green'){
            obstacles.forEach((element, idx) => {
                //console.log(element.color)
                if(element.color === 'green'){
                    let arr = obstacles.splice(idx, 1)
                    deletedGreen.push(...arr);
                }
            })
        }
        
        if(this.x === control.x && this.y === control.y && this.color == 'red' && control.color == 'red'){
            obstacles.forEach((element, idx) => {
                //console.log(element.color)
                if(element.color === 'red'){
                    let arr = obstacles.splice(idx, 1)
                    deletedRed.push(...arr);
                }
            })
        }
    }
}


console.log(deletedRed)


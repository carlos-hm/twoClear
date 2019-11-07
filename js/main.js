const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let interval;
let frames  = 0;
let obstacles = [];
let deletedGreen = [];
let redObs = [];
let moves = 0;

const images = {
    bg: 'img/background.png',
    playerG: 'img/playerG.png',
    playerR: 'img/playerR.png',
    laserR: 'img/laserRed.png',
    laserG: 'img/laserGreen.png',
    blackH: 'img/blackHole.png',
    goalR: 'img/goalRed.png',
    goalG: 'img/goalGreen.png',
    controlR: 'img/controlRed.png',
    controlG: 'img/controlGreen.png',
    win01: 'img/Win01.png',
    win02: 'img/Win02.png',
    win03: 'img/Win03.png',
}

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        document.querySelector('canvas').style.visibility = 'visible';
        document.querySelector('button').style.display = 'none';
        startGame();
    };
  
    function startGame() {
        interval =  setInterval(update, 100 / 60);
    }
};

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};


function drawObstacle() {
    obstacles.forEach(obj => obj.draw());
}

function check(){
    obstacles.forEach(obj => obj)
}

function score(){
    ctx.font = '20px Montserrat'
    ctx.fillStyle = '#707070'
    ctx.fillText(`moves: ${moves}`, 670, 50)
}

function checkWin(){
    if(playerRed.onGoal(goalRed) && playerGreen.onGoal(goalGreen)){
        clearInterval(interval);
        win.draw();
    }
}

function restart(){
    location.reload();
}

function update() {
    frames++;
    clearCanvas();
    board.draw();
    drawObstacle();
    goalRed.draw();
    goalGreen.draw();
    controlRed.draw();
    controlGreen.draw();
    playerRed.draw();
    playerGreen.draw();
    playerRed.onControl(controlRed);
    playerGreen.onControl(controlGreen);
    //win.draw()
    score();
    checkWin();
    //win.draw();
    //checkCollitions();
}


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let interval;
let frames  = 0;

const images = {
    bg: 'img/background.png',
    playerG: 'img/playerG.png',
    playerR: 'img/playerR.png',
    laserR: 'img/laserRed.png',
    laserG: 'img/laserGreen.png',
    goalR: 'img/goalRed.png',
    goalG: 'img/goalGreen.png',
    controlR: 'img/controlRed.png',
    controlG: 'img/controlGreen.png'

}

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  
    function startGame() {
        interval =  setInterval(update, 100 / 60);
    }
};

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function checkCollitions(){
    if (playerRed.isTouching(laserGreen)) {
        console.log('touch');
      }
}

function update() {
    frames++;
    clearCanvas();
    board.draw();
    laserGreen.drawRed();
    laserRed.drawGreen();
    goal.drawRed();
    goal.drawGreen();
    control.drawGreen();
    control.drawRed();
    playerRed.drawRed();
    playerRed.xRed;
    playerRed.yRed;
    playerGreen.drawGreen();
    playerGreen.xGreen;
    playerGreen.yGreen;
    checkCollitions();
}


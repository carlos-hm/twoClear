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

// function checkCollitions(){
//     if (playerRed.isTouching(laserGreen)) {
//         // if(playerRed.side === 'left') {
//         //     playerRed.x = playerRed.x + 100;
//         // } else if(playerRed.side === 'right') {
//         //     playerRed.x = playerRed.x - 100;
//         // }
//     }

//     if(playerGreen.isGoal(goalGreen)){
//         console.log('green win')
//     }
//     if(playerRed.isGoal(goalRed)){
//         console.log('red win');
//     }
//     if(playerGreen.onControl(controlGreen)){
//         console.log('control green')
//     }
//     if(playerRed.onControl(controlRed)){
//         console.log('control red');
//     }
// }

function update() {
    frames++;
    clearCanvas();
    board.draw();
    laserGreen.draw();
    laserRed.draw();
    goalRed.draw();
    goalGreen.draw();
    controlRed.draw();
    controlGreen.draw();
    playerRed.draw();
    playerGreen.draw();
    //checkCollitions();
}


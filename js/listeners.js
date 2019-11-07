document.onkeypress = e => {
    //console.log(e)
    switch (e.keyCode) {
        case 97:
            playerRed.moveLeft(obstacles);
            return
        case 100:
            playerRed.moveRight(obstacles);
            return
        case 119:
            playerRed.moveUp(obstacles);
            return
        case 115:
            playerRed.moveDown(obstacles);
            return
        case 107:
            playerGreen.moveLeft(obstacles);
            return
        case 241:
            playerGreen.moveRight(obstacles);
            return
        case 108:
            playerGreen.moveDown(obstacles);
            return
        case 111:
            playerGreen.moveUp(obstacles);
            return
        default:
            break
    }
}

// document.onkeyup = e => {
//     playerRed.vx = 0
//     playerRed.position = 0
//   }
document.onkeypress = e => {
    //console.log(e)
    switch (e.keyCode) {
        case 97:
            playerRed.moveLeft(laserGreen)
            console.log('aiurraaaa')
            return
        case 100:
            playerRed.moveRight(laserGreen)
            console.log('aiuraaa x2')
            return
        case 119:
            playerRed.moveUp(laserGreen)
            return
        case 115:
            playerRed.moveDown(laserGreen)
            return
        case 107:
            playerGreen.moveLeft(laserRed)
            return
        case 241:
            playerGreen.moveRight(laserRed)
            return
        case 108:
            playerGreen.moveDown(laserRed)
            return
        case 111:
            playerGreen.moveUp(laserRed)
            return
        default:
            break
    }
}

// document.onkeyup = e => {
//     playerRed.vx = 0
//     playerRed.position = 0
//   }
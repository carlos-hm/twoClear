document.onkeypress = e => {
    //console.log(e)
    switch (e.keyCode) {
        case 97:
            playerRed.moveLeft()
            return
        case 100:
            playerRed.moveRight()
            return
        case 119:
            playerRed.moveUp()
            return
        case 115:
            playerRed.moveDown()
            return
        case 107:
            playerGreen.moveLeft()
            return
        case 241:
            playerGreen.moveRight()
            return
        case 108:
            playerGreen.moveDown()
            return
        case 111:
            playerGreen.moveUp()
            return
        default:
            break
    }
}

// document.onkeyup = e => {
//     playerRed.vx = 0
//     playerRed.position = 0
//   }
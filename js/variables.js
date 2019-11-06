const board = new Board();
const laserRed1 = new Laser(200, 400, 'red', 100, 100);
const laserRed2 = new Laser(300, 400, 'red', 100, 100);
const laserRed3 = new Laser(400, 400, 'red', 100, 100);
const laserGreen1 = new Laser(500, 400, 'green', 100, 100);
const laserGreen2 = new Laser(500, 500, 'green', 100, 100);
const laserGreen3 = new Laser(500, 600, 'green', 100, 100);
const blackHole1 = new Laser(100, 500, 'black', 100, 100);
const blackHole2 = new Laser(100, 400, 'black', 100, 100);
const blackHole3 = new Laser(100, 300, 'black', 100, 100);
const blackHole4 = new Laser(200, 300, 'black', 100, 100);
const blackHole5 = new Laser(200, 200, 'black', 100, 100);
const blackHole6 = new Laser(300, 200, 'black', 100, 100);
const blackHole7 = new Laser(400, 200, 'black', 100, 100);
const blackHole8 = new Laser(400, 300, 'black', 100, 100);
const blackHole9 = new Laser(300, 600, 'black', 100, 100);
const blackHole10 = new Laser(700, 400, 'black', 100, 100);
const goalRed  = new Goal(600, 400, 'red');
const goalGreen = new Goal(300, 300, 'green');
const controlRed = new Control(400, 500, 'red');
const controlGreen = new Control(200, 100, 'green');
const playerRed = new Player(600, 600, 'red');
const playerGreen = new Player(0, 600, 'green');

obstacles.push(laserRed1, laserRed2, laserRed3, laserGreen1, laserGreen2, laserGreen3, blackHole1, blackHole2, blackHole3, blackHole4, blackHole5, blackHole6,blackHole7, blackHole8, blackHole9, blackHole10);

//redObs.push(laserRed1, laserRed2, laserRed3);
let ballSize = 40;
let ballX = 0;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;

function setup() {
    createCanvas(600,500);
    noStroke();
    ballX = width/2;
    ballY = height/2;


}

function draw() {
    background(200);
    fill(0);
    circle(ballX,ballY,ballSize);

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

}




















// let pico;
// let picowidth;
// function setup(){
//     createCanvas(400,600);
//     background('grey');
// }

// function preload(){
//     pico = loadImage("assets/pico-a.png")


// }
// function draw(){
//     background('lightblue');
//     image(pico, xpos,0, 110,133);

//     if (keyIsDown(RIGHT_ARROW)){
//         picowidth = 110;




//     }

// }

// function keyPressed(){
//     if (keyCode === 32){
//     picowidth = 55;
//     }


// }


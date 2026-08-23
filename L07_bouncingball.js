let ballSize = 40;
let ballX = 0;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 2;

function setup() {
    createCanvas(600,500);
    background(200);
    noStroke();
    ballX = width/2;
    ballY = height/2;
    fill('hotpink ');


}

function draw() {


    circle(ballX,ballY,ballSize);

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    if (ballX > width) {
        ballSpeedX = -1 * ballSpeedX;
        fill (   random(0,255),   0,   random(0,255),   random(10,55)    );
    }
    if (ballX < 0) {
        ballSpeedX = -1 * ballSpeedX;
        fill (random(0,255),0, random(0,255),random(10,55)     );
    }
    if (ballY > height ){
        ballSpeedY = -1.1 * ballSpeedY;
        fill (random(0,255) ,0,random(0,255),random(10,55) );
    }
    if (ballY < 0) {
        ballSpeedY = -8.95 * ballSpeedY;
        fill (random(0,255),0,random(0,255),random(10,55));
    }
    function keyPressed() {
        

}



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


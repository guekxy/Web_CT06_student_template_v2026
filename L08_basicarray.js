let ypos = 0;
let 

function setup() {
    createCanvas(800,600);
    ypos = height;
}

function draw() {
    background(220);
    textSize(18);
    text("hello everybody", 100, ypos);
    text("second line", 100, ypos + 18);
    text("ethan wong joined our sunday class!",100,ypos + 36);
    ypos = ypos -0.67
   

}
let bgm;
let pico;
let xpos,ypos;
let bgm,sfx;

function preload(){
    pico = loadImage("assets/pico-a.png")
}
function setup() {
    createCanvas(350,500);
    background('lightblue');
    xpos = 0;
}

function draw() {
    background('lightblue');
    image(pico, xpos,0, 110,133);

    if(keyIsDown(RIGHT_ARROW)) {
        xpos = xpos + 2;
    }

}
let bgm;
let pico;

function preload(){
    pico = loadImage("assets/pico-a.png")
}
function setup() {
    createCanvas(350,500);
    background('lightblue');
    xpos = 0;
}

function draw() {
    image(pico, xpos,0, 110,133);

}
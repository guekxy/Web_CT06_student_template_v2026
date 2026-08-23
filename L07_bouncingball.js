let pico;
let picowidth;
function setup(){
    createCanvas(400,600);
    background('grey');
}

function preload(){
    pico = loadImage("assets/pico-a.png")


}
function draw(){
    background('lightblue');
    image(pico, xpos,0, 110,133);

    if (keyIsDown(RIGHT_ARROW)){



    }

}




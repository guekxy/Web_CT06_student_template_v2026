

let xpos = 0;
let ypos = 0;
size = 
xpos = width/2
ypos = height/2

function draw(){
    background('sky blue');
    fill (colour);
    circle(xpos,ypos,size);

}
if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos +2;

}
if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -2;

}

if (keyIsDown(UP_ARROW)) {
    ypos = ypos - 2;
}

if (keyIsDown(DOWN_ARROW)) {
    ypos = ypos + 2;

}
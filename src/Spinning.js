var OrigSize = 800; 
var Delta = 50;

function setup() {
    createCanvas(OrigSize, OrigSize);
    background(0);

    angleMode(DEGREES);

    

    noFill();
    stroke(255)

}

function draw() {
    background(200);

    let deg = noise(frameCount/100 ,10 )*(-50);
    Recursion(700,10 , deg );
}

function Recursion( posY , R, deg){

    if( posY < 200 ) return ;
    
    push();
        translate(width/2 +cos( noise(frameCount/100)*360 )*Delta + (noise(1000,posY/10+frameCount/10)-0.5)*40 , posY +sin( noise(10,frameCount/100)*360 )*Delta);
        rotate( deg ); // [ -50 , 0]
        shearX(60);
        
        strokeWeight( random(2,4) );
        circle(0,0,R);
    pop();

    Recursion(posY -20 , R*1.16 ,deg)
}


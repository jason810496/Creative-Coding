var OrigSize = 800; 
var Delta = 50;

function setup() {
    createCanvas(OrigSize, OrigSize);
    background(0);

    angleMode(DEGREES);

}

function draw() {
    background(150);

    let deg = noise(frameCount/100 ,10 )*(-50);
    Recursion(700,10 , deg ,1);
}

function Recursion( posY , R, deg , cnt){

    if( posY < 200 ) return ;
    
    push();
        translate(width/2 +cos( noise(frameCount/100)*360 )*Delta + (noise(1000,posY/10+frameCount/10)-0.5)*40 , posY +sin( noise(10,frameCount/100)*360 )*Delta);
        rotate( deg ); // [ -50 , 0]
        shearX(60);
        
        noFill();
        stroke(255)
        strokeWeight( (noise(cnt*5,frameCount/10)+0.1)*5 );
        circle(0,0,R);

    pop();

    Recursion(posY -20*(cnt/15) , R*1.16 ,deg ,cnt+1)
}


var OrigSize = 800; 
var mn_size = 0 ;
var scaleRate = 0;
var R = 0;
var clr ;

function setup() {
    mn_size = min( windowWidth , windowHeight ) ;
    scaleRate = mn_size / OrigSize ;
    createCanvas(OrigSize, OrigSize);
    angleMode( DEGREES );

    // scale( scaleRate , scaleRate );

    R = random(50,100);

    clr = color(255);
    clr.setAlpha( random(200,240) );
    fill( clr );

    // noStroke();
    stroke(255);
    strokeWeight(5);

    // WaveLine()
}

function draw() {
    background(0);

//     translate( width/2 , height/2) ;
//     Bubble();
    WaveLine(100,200,300,400);
}

function Bubble(){

    beginShape();
        for(let i=0 ; i<360 ;i+=40){
            let x = R*cos(i) , y=R*sin(i);

            vertex(x + noise(100,frameCount/10)*10 , y + noise( frameCount/100 ,100 )*20 );
        }
    endShape();
}

function WaveLine(x1,y1,x2,y2){
    // let x1 =100 , y1=100 , x2=40,y2=600;
    // let dx = x2-x1;
    // let dy = y2-y1;
    // let t = dy/dx;
    // let deg = atan(t);
    let dis = dist(x1,y1,x2,y2);

    // fill(240);
    // circle( x1,y1,10);
    // circle( x2,y2,20);

    noFill();
    push();
        translate( x1 , y1 ) ;
        rotate(atan2(y2 - y1, x2 - x1));
        
        beginShape();
            for(let i=0;i<dis ;i++ ){
                vertex(i , sin( frameCount+i*5)*20);
            }
        endShape();

    pop();
}
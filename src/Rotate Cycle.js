var OrigSize = 800; 
var mn_size = 0 ;
var scaleRate = 0;
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);
var List =  [];
var N = 6;
var SplitDeg = 20;
var OrigSize = 800; 
var mn_size = 0 ;
var scaleRate = 0;
var ColorList = "0fa3b1-b5e2fa-f9f7f3-eddea4-f7a072".split("-").map(a=>"#"+a);
var List =  [];
var N = 6;
var SplitDeg = 20;

function setup() {
    mn_size = min( windowWidth , windowHeight ) ;
    scaleRate = mn_size / OrigSize ;
    createCanvas(OrigSize, OrigSize);
    angleMode( DEGREES );

    scale( scaleRate , scaleRate );

    let R = random(80,100);
    let RR = dist(R*cos(SplitDeg),R*sin(SplitDeg),R*cos(SplitDeg*2),R*sin(SplitDeg*2));

    for( let i = 0; i < N ;i++){
        let clr = color( random( ColorList)  ) ;
        clr.setAlpha( random(150,250) ) ;
        List.push({
            r1:R*(i+0.1)*0.8,
            r2:RR*(i+0.1)*0.8,
            clr:clr,
            wt:(i+1)*2
        });
    }
}

function draw() {
    background(0);

    translate(width/2 , height/2);

    rotate(frameCount/10);
    for( let i=N-1  ; i>=0; i--){

        rotate( i*360/N );
        let ele = List[i];
        stroke( ele.clr) ;
        strokeWeight( ele.wt );

        let r1 = ele.r1 + noise(frameCount/100,i*100)*50;
        let r2 = ele.r2 + noise(i*100,frameCount/50)*30;

        WaveLine(0,0,0,r2);
        WaveLine(0,0,0,-r2);
        WaveLine(0,0,-r2,0);
        Bubble(r1);
    }
    
}

function Bubble(R){

    beginShape();

        let x1=R*cos(0) ;
        let y1=R*sin(0);

        for(let i=0;i<=360;i+=SplitDeg ){
            let x2 = R*cos(i) , y2 = R*sin(i);
            WaveLine(x1,y1,x2,y2);
            x1 = x2;
            y1 = y2;
        }
    endShape();
}

function WaveLine(x1,y1,x2,y2){

    let dis = dist(x1,y1,x2,y2);

    noFill();
    push();
        translate( x1 , y1 ) ;
        rotate(atan2(y2 - y1, x2 - x1));
        
        beginShape();
            for(let i=0;i<=dis ;i++ ){
                vertex(i , sin( frameCount*2+i*10)*10);
            }
        endShape();

    pop();
}

// function Cycle(){
//     WaveLine(0,0,0,RR);
//     WaveLine(0,0,0,-RR);
//     WaveLine(0,0,-RR,0);
//     Bubble();
// }
function setup() {
    mn_size = min( windowWidth , windowHeight ) ;
    scaleRate = mn_size / OrigSize ;
    createCanvas(OrigSize, OrigSize);
    angleMode( DEGREES );

    scale( scaleRate , scaleRate );

    let R = random(80,100);
    let RR = dist(R*cos(SplitDeg),R*sin(SplitDeg),R*cos(SplitDeg*2),R*sin(SplitDeg*2));

    for( let i = 0; i < N ;i++){
        let clr = color( random( ColorList)  ) ;
        clr.setAlpha( random(150,250) ) ;
        List.push({
            r1:R*(i+0.1)*0.8,
            r2:RR*(i+0.1)*0.8,
            clr:clr,
            wt:(i+1)*2
        });
    }
}

function draw() {
    background(0);

    translate(width/2 , height/2);

    rotate(frameCount/10);
    for( let i=N-1  ; i>=0; i--){

        rotate( i*360/N );
        let ele = List[i];
        stroke( ele.clr) ;
        strokeWeight( ele.wt );

        let r1 = ele.r1 + noise(frameCount/100,i*100)*50;
        let r2 = ele.r2 + noise(i*100,frameCount/50)*30;

        WaveLine(0,0,0,r2);
        WaveLine(0,0,0,-r2);
        WaveLine(0,0,-r2,0);
        Bubble(r1);
    }
    
}

function Bubble(R){

    beginShape();

        let x1=R*cos(0) ;
        let y1=R*sin(0);

        for(let i=0;i<=360;i+=SplitDeg ){
            let x2 = R*cos(i) , y2 = R*sin(i);
            WaveLine(x1,y1,x2,y2);
            x1 = x2;
            y1 = y2;
        }
    endShape();
}

function WaveLine(x1,y1,x2,y2){

    let dis = dist(x1,y1,x2,y2);

    noFill();
    push();
        translate( x1 , y1 ) ;
        rotate(atan2(y2 - y1, x2 - x1));
        
        beginShape();
            for(let i=0;i<=dis ;i++ ){
                vertex(i , sin( frameCount*2+i*10)*10);
            }
        endShape();

    pop();
}

// function Cycle(){
//     WaveLine(0,0,0,RR);
//     WaveLine(0,0,0,-RR);
//     WaveLine(0,0,-RR,0);
//     Bubble();
// }
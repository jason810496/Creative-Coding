var OrigSize = 800; 
var Delta = 50;
var List = []
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);

function setup() {
    createCanvas(OrigSize, OrigSize);
    background(0);

    angleMode(DEGREES);
    for(let i=0;i<10;i++){
        let n = int( random(3,8) );
        let deg = 260/n;
        let temp = []
        for(let j=0;j<n;j++){
            let cur = deg*j;
            let clr=color( random(ColorList) );
            // clr.setAlpha( random(150,220) );
            temp.push({
                deg:cur,
                r: random(5,10),
                clr:clr
            });
        }

        List.push( temp );
    }
}

function draw() {
    background(0);

    let deg = noise(frameCount/100 ,10 )*(-50);
    Recursion(700,10 , deg ,1 ,0);
}

function Recursion( posY , R, deg , cnt , ith ){

    if( posY < 200 ) return ;
    
    push();
        translate(width/2 +cos( noise(frameCount/100)*360 )*Delta + (noise(1000,posY/10+frameCount/10)-0.5)*40 , posY +sin( noise(10,frameCount/100)*360 )*Delta);
        rotate( deg ); // [ -50 , 0]
        shearX(60);
        
        noFill();
        stroke(255)
        strokeWeight( (noise(cnt*5,frameCount/10)+0.1)*5 );
        circle(0,0,R);

        if( cnt%3==0 && cnt>10 ){
            noStroke();
            List[ ith ].forEach(ele => {
                fill( ele.clr )
                circle( cos(ele.deg + frameCount*2 )*R*1.05 , sin(ele.deg + frameCount*2 )*R*1.15 , ele.r+noise(frameCount/100,cnt*5)*10 );
            });
            ith++;
        }
    pop();

    Recursion(posY -20*(cnt/15) , R*1.16 ,deg ,cnt+1,ith)
}


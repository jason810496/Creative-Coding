var OrigSize = 800 ;
var ScaleRate = 0 ;
var span = 10;
var N = 5;
var BaseHeight = 0;

function setup() {
    
    mn_sz = min( windowWidth , windowHeight );
    ScaleRate = mn_sz/OrigSize ;
    createCanvas( OrigSize , OrigSize );
    background(0);
    colorMode(HSB);

    BaseHeight = height / N;

    CreateMountain();

    
}


function draw() {
    
}

function CreateMountain(){
    // for(let i=N-1 ; i>=0 ; i--){
    //     Mountain( i );
    // }

    for(let i=0 ; i<N ; i++){
        Mountain( i );
    }
}

function Mountain( ith ){
    noStroke();
    fill(0,0,map(ith,0,5,100,0) );
    beginShape();

        let Base =  BaseHeight*(2.5+ith)*0.5; 
        let LastX = 0 ;
        let LastY = height -map( noise(LastX,ith*100 ,ith*ith*10 ) ,0,1,0,200) - Base;
        let curSpan = span*ScaleRate*(ith+3);
        for(let x=curSpan ; x<=width+100 ; x+= curSpan ){
            
            // vertex(LastX,LastY );

            let y1 = LastY ;
            let y2 = height -map( noise(x,ith*100 ,ith*ith*10 ) ,0,1,0,200) - Base;
            let slope = (y2-y1)/curSpan ;
            for( let j=LastX ; j<= x ;j+=map(ith,0,5,10,3)){
                vertex(j,height - LastY - slope*(j-LastX) - map( noise(j,ith*100 ,ith*ith*10 ) ,0,1,0,20));
            }

            LastX = x;
            LastY = y2;
            
        }
        // vertex(30, 75);

        vertex( width , height);
        vertex( 0 , height );
    endShape();
}
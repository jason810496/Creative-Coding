var OrigSize = 800 ;
var ScaleRate = 0 ;
var span = 10;
var N = 5;
var BaseHeight = 0;

var  ColorBackgroundList= "0b2c24-0f392b-00115E-002254-00334A".split("-").map(a=>"#"+a);

var ColorMountainList="e85d04-f48c06-faa307-ffba08".split("-").map(a=>"#"+a);

var Color_Mountain ;
var Color_BG;

function setup() {
    
    mn_sz = min( windowWidth , windowHeight );
    ScaleRate = mn_sz/OrigSize ;
    createCanvas( OrigSize , OrigSize );

    BaseHeight = height / N;
    Color_Mountain = random( ColorMountainList );
    Color_BG = random(ColorBackgroundList) ;
}


function draw() {

    background( Color_BG );
    CreateMountain();
}

function CreateMountain(){
    
    for(let i=0 ; i<N ; i++){
        Mountain( i );
    }
}

function Mountain( ith ){

    let CNT = frameCount/50 ;
    noStroke();
    let clr = color( Color_Mountain );
    clr.setAlpha( map(ith,0,5,80,150) );

    fill( clr );
    beginShape();

        let Base =  BaseHeight*(2.5+ith)*0.5; 
        let LastX = 0 ;
        let LastY = height -map( noise(LastX + CNT ,ith*100 ,ith*ith*10 ) ,0,1,0,200) - Base ;
        let curSpan = span*ScaleRate*(ith+3);
        for(let x=curSpan ; x<=width+100 ; x+= curSpan ){
            

            let y1 = LastY ;
            let y2 = height -map( noise(x + CNT ,ith*100 ,ith*ith*10 ) ,0,1,0,200) - Base;
            let slope = (y2-y1)/curSpan ;
            for( let j=LastX ; j<= x ;j+=map(ith,0,5,10,3)){
                vertex(j,height - LastY - slope*(j-LastX) - map( noise(j,ith*100 ,ith*ith*10 ) ,0,1,0,20));
            }

            LastX = x;
            LastY = y2;
            
        }

        vertex( width , height);
        vertex( 0 , height );
    endShape();
}
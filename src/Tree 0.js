var Deg = 30;
var Len = 40;
var Wt = 4 ;
var Shift = 0;

var ColorList ;
var RawList = [ "283d3b-197278-edddd4-c44536-772e25","22577a-38a3a5-57cc99-80ed99-c7f9cc","e27396-ea9ab2-efcfe3-eaf2d7-b3dee2","ff9f1c-ffbf69-ffffff-cbf3f0-2ec4b6"];
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    background(0);
    stroke(255);

    translate(  width/2 , height-50 );

    // CreateTree(Len , Wt );

    scale(1.5 , 1.5 );

    let str  = random( RawList );
    ColorList = str.split("-").map(a=>"#"+a);

    CreateTree2( Len*random(1,1.5) , Wt*random(1,1.2)  ,1 );

    
}
  


function CreateTree( l ,w){
    
  
    if( l<20 ){
      push()
        let clr = color( random( ColorList ) );
        clr.setAlpha( random(50,100) );
        noStroke();
        fill(  clr );
        circle( 0 , 0 , l*random( 0.5 , 1.2 ));
      pop()
    }

    if( l<10){
        return ;
    }

    strokeWeight(w);
    line( 0 ,0 ,0 ,-l );
    push()
        translate(0,-l);
        push()
            rotate( -Deg);
            CreateTree( l*0.8 , w*0.6 );
        pop()
        push()
            rotate( Deg);
            CreateTree( l*0.8 , w*0.6 );
        pop()

    pop()
}

function CreateTree2( l , w ,d ){  // len , weidht , depth

      strokeWeight(w);
      line( 0 ,0 ,0 ,-l );

    let cnt = int( random(2,4) );
    let span = 2*Deg/cnt ;
    push()
        translate(0,-l);

        for( let deg = -Deg ; deg <= Deg ; deg+=span ){
            push();
                rotate( deg + random(-30,30) );
                CreateTree( l*0.8*random(1,1.5) , w*0.8*random(1,1.2) , d+1 );
            pop();
        }

    pop()
}

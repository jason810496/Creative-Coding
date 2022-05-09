var Deg = 30;
var Len = 0;
var Wt = 0 ;
var Shift = 0;
var RandDegList = [];
var RandLenList = [];
var RotateScale = 10;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    colorMode( HSB ) ;

    background(0);
    stroke(255);

    translate(  width/2 , height-100 );


    Len = 70 *random(1,1.5) ; 
    Wt = 4* random( 1, 1.2) ;
    CreateTree2( Len, Wt , 1 );
}
function draw() {
    background(0);
    translate(  width/2 , height-100 );
  
    DrawTree();
}

function CreateTree( l ,w ,d , c1 , c2 ){
    
  
    if( d>=6 ){
      push()
        let clr = color( noise(l*10,d*10,frameCount/80)*120 + 210 ,100 ,100 , noise(l,w)*0.5 );
        
        noStroke();
        fill(  clr );
        circle( 0 , 0 , l);
      pop()
    }
  
    if( d>6){
      return ;
    }

    strokeWeight(w);
    line( 0 ,0 ,0 ,-l );
    push()
        translate(0,-l);
        push()
            rotate( -Deg + sin(frameCount*c1)*c2 );
            CreateTree( l*0.8 , w*0.6 ,d+1 ,c1*1.3, c2*1.2);
        pop()
        push()
            rotate( Deg + + sin(frameCount*c1)*c2);
            CreateTree( l*0.8 , w*0.6 ,d+1 ,c1*1.3 , c2*1.2);
        pop()

    pop()
}

function CreateTree2( l , w  ){  // len , weidht , depth

    // strokeWeight(w);
    // line( 0 ,0 ,0 ,-l );

    let cnt = int( random(2,4) );
    let span = 2*Deg/cnt ;

    push();
        // translate(0,-l);

        for( let deg = -Deg ; deg <= Deg ; deg+=span ){
            push();
                let t = deg + random(-30,30);
                RandDegList.push( t );
                rotate( t );
                let ll =  l*0.8*random(1,1.5) ; 
                let ww =  w*0.8*random(1,1.2) ;
                RandLenList.push( { l:ll , w:ww } );
                // CreateTree( ll, ww );
            pop();
        }

    pop();
}

function DrawTree(){
    

    rotate( sin( frameCount*1.3 )*RotateScale );

    strokeWeight( Wt );
    line( 0 ,0 ,0 ,-Len );
    push();
        translate(0,-Len );

        let i=0;
        RandDegList.forEach(deg => {
            push();
                rotate( deg + sin( frameCount*1.5 )*RotateScale*1.1 );
                CreateTree( RandLenList[i].l , RandLenList[i].w ,1 , 1.8  , 1.5 ); // rotate scale1 , rotate scale2
            pop();

            i++;
        });

    pop();
}

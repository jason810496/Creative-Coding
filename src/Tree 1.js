var Deg = 30;
var Len = 40;
var Wt = 4 ;
var Shift = 0;
var RandDegList = [];
var RandLenList = [];
var RotateScale = 10;
var BlossomList = [];
var Count = 0;
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    background(0);
    stroke(255);

    translate(  width/2 , height-100 );

    // CreateTree(Len , Wt );

    scale(1.5 , 1.5 );

    Len = 40 *random(1,1.5) ; 
    Wt = 4* random( 1, 1.2) ;
    CreateTree2( Len, Wt , 1 );
}
function draw() {
    background(0);
    translate(  width/2 , height-100 );

    Count = 0;
    DrawTree();
}

function CreateTree( l ,w ,d , c1 , c2 ){
    
  
    if( d>=5 ){

        BlossomList.push( int( random(0,9) ) );
    }
  
    if( d>6){
      return ;
    }

    CreateTree( l*0.8 , w*0.6 ,d+1 ,c1*1.8, c2*1.2);

    CreateTree( l*0.8 , w*0.6 ,d+1 ,c1*1.8 , c2*1.2);
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
                CreateTree( ll, ww );
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
                DrawBranch( RandLenList[i].l , RandLenList[i].w ,1 , 1.8  , 1.5 ); // rotate scale1 , rotate scale2
            pop();

            i++;
        });

    pop();
}

function DrawBranch( l ,w ,d , c1 , c2 ){
    
  
    if( d>=5 ){
      push()
        let clr = color( ColorList[ BlossomList[Count++] ] );
        clr.setAlpha( noise(l,w)*50+50 );
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
            DrawBranch( l*0.8 , w*0.6 ,d+1 ,c1*1.8, c2*1.2);
        pop()
        push()
            rotate( Deg + + sin(frameCount*c1)*c2);
            DrawBranch( l*0.8 , w*0.6 ,d+1 ,c1*1.8 , c2*1.2);
        pop()

    pop()
}

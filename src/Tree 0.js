var Deg = 30;
var Len = 40;
var Wt = 4 ;
var Shift = 0;
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    background(0);
    stroke(255);

    translate(  width/2 , height-100 );

    // CreateTree(Len , Wt );

    scale(1.5 , 1.5 );
    CreateTree2( Len*random(1,1.5) , Wt*random(1,1.2)  ,1 );
}
  
function draw() {
    // background(220);
}

function CreateTree( l ,w){
    if( l<10){
      return ;
    }
  
    if( l<20 ){
      push()
        let clr = color( random( ColorList ) );
        clr.setAlpha( random(50,100) );
        noStroke();
        fill(  clr );
        circle( 0 , 0 , l*random( 0.5 , 1.2 ));
      pop()
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

function RandomTree(){
  CreateTree2( Len*random(1,1.5) , Wt*random(1,1.2)  ,1 );
}

function TreeArray(){
    for(let i=100 ;i<width+Shift ; i+=200 ){
        for(let j=150 ;j<height+Shift ; j+=200 ){
            push();
                translate( i , j );
                CreateTree(Len , Wt);
            pop();
        }
    }
}
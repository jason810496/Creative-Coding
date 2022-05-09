var Deg = 30;
var Len = 30;
var Wt = 4 ;
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    stroke(255);
    
    translate(  width/2 , height-100 );

    
    CreateTree(Len , Wt );

    for()
}
  
function draw() {
    background(220);
}

function CreateTree( l ,w){
    if( l<20) return ;

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
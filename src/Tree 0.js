var Deg = 30;
var Len = 40;
var Wt = 4 ;
var Shift = 0;
function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);

    background(0);
    stroke(255);

    // translate(  width/2 , height-100 );

    // CreateTree(Len , Wt );

    
}
  
function draw() {
    // background(220);
}

function CreateTree( l ,w){
    if( l<10) return ;

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
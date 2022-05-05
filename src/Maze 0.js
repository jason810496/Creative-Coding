var OrigSize = 800; 
var pos = [ [0,1],  [1,0] , [0,-1] ,[-1,0] ,[1,1],[1,-1],[-1,1],[-1,-1] ];
var span = 50;
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);
var clr;
var Node1;
var Node2;



class Node{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.depth=0;
    }
}

function setup() {
    createCanvas(OrigSize, OrigSize);
    background(0);
    ;
    clr = color(0);
    clr.setAlpha(50);

    frameRate(10);

    Node1 = { x:0,y:0,d:0};
    let v= random( pos );
    Node2 = { x:v[0]*span,
        y:v[1]*span,
        d:1};
}

function draw() {
    if( Node2.depth >= 10 ){
        Node1 = { x:0,y:0,d:0};
        let v= random( pos );
        Node2 = { x:v[0]*span,
                y:v[1]*span,
                d:1};
    }
    background(clr);
    push();
        
        traslate( width/2 , height/2 );
        strokeWeight(5);
        stroke(255);
        line( Node1.x , Node1.x , Node2.x ,Node2.y );

        Node1 = Node2;

        Node2.depth++;
        let v= random( pos );
        Node2.x += v[0]*span;
        Node2.y += v[1]*span;

    pop();
}

function DFS(posX , posY ,depth){
    if( depth > 6 ) return ;

    push();
        // translate( width/2 , height/2 ) ;
        
        let n = 2;
        for(let i=0;i<n;i++){
            let v = random( pos );
            // console.log(v);
            let x=posX+v[0]*span , y=posY + v[1]*span ;
            strokeWeight(5);
            stroke(255);
            line(  width/2 + posX , height/2+ posY ,width/2+ x,height/2+ y )
            DFS(x,y,depth+1);
        }
    pop();
}


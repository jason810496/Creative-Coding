var OrigSize = 800; 
var pos = [ [0,1],  [1,0] , [0,-1] ,[-1,0] ,[1,1],[1,-1],[-1,1],[-1,-1] ];
var span = 50;
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);

function setup() {
    createCanvas(OrigSize, OrigSize);

    background(0);
    push();
        DFS(0,0,0);
    pop();
}

function draw() {
    // background(0);

    // let deg = noise(frameCount/100 ,10 )*(-50);
    // Recursion(700,10 , deg ,1 ,0);
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


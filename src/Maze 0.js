var OrigSize = 800; 
var pos = [ [0,1],  [1,0] , [0,-1] ,[-1,0] ,[1,1],[1,-1],[-1,1],[-1,-1] ];
var span = 10;
var ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a);

var step=0;
var Limit = 20;
var List = []
var N = 5;
var XX=0; 
var YY=0;


function setup() {
    createCanvas(OrigSize, OrigSize);
    background(0);


    frameRate(20);
    
    for( let i=0 ; i<N;i++){
        let v= random( pos );
        let clr = color( random(ColorList) );
        clr.setAlpha(230,255);
        List.push({
           x1:0,
           y1:0,
           x2:v[0]*span,
           y2:v[1]*span,
           clr:clr,
           wt:random(3,5)
        });
    }

    XX=width/2;
    YY=height/2;
    
}

function draw() {

    if( step >= Limit ){

        step=0;
        
        List.forEach(ele => {
            ele.x1=0;
            ele.y1=0;
            
            let v = random( pos ) ;
            ele.x2 = v[0]*span ;
            ele.v2 = v[1]*span ;

            let clr = color( random(ColorList) );
            clr.setAlpha(230,255);

            ele.clr = clr ;
        });
    }
    background(clr);
    push();
        
        List.forEach(ele => {
            strokeWeight(ele.wt);
            stroke( ele. clr );
            line( ele.x1 + XX  ,ele.y1+YY , ele.x2 + XX , ele.y2 + YY ) ;

            ele.x1 = ele.x2;
            ele.y1 = ele.y2;

            let v = random( pos );

            ele.x2+=v[0]*span;
            ele.y2+=v[1]*span;
        });

    pop();

    step++;
}


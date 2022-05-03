
var span = 30;
var r=10;
var sz;
var mn_sz;
var List = [];
var n=0;
var pos = [ [0,1] , [0,-1] , [1,0] ];
var LineList = [];
var Change_Speed = 20;
var ColorRange = 50;

function setup() {
    // createCanvas(400, 400);
    mn_sz = min( windowWidth , windowHeight );
    mn_sz = min( mn_sz , 800 );
    createCanvas( mn_sz , mn_sz );
    background(0);
    colorMode(HSB);
    n= int(mn_sz/span+ 5);

    
    List = Array.from(Array(n), () => new Array(n))
    LineList = Array.from(Array(n), () => new Array(n))
    CreateDot();
    // CreateLine();
    strokeWeight(1);
  }
  
function draw() {
    DeleteLine();
    

    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            push();
                let x=List[i][j].x ;
                let y=List[i][j].y ;
                let clr = map(noise( x , y ,frameCount/Change_Speed ),0,1,0,100);
                
                
                if( clr > ColorRange && i<=n-3){
                    MarkLine(i,j);
                }

                fill( List[i][j].clr , 100 , clr );
                noStroke();
                circle( x , y , r);
            pop();
        }
    }
}

function CreateDot(){

    for( let i=0; i<n;i++){
        for( let j=0 ; j<n ;j++){

            List[i][j] = {
                x:i*span,
                y:j*span,
                clr:random(80,120)
            };
        }
    }
}

// function CreateLine(){
//     for(let i=0;i<n-2;i++){
//         for(let j=0;j<n;j++){
//             for(let k=0;k<3;k++){
//                 let idx_i=i+pos[k][0], idx_j = j+pos[k][1];
//                 if(  idx_j<0 || idx_j>=n ) continue;
//                 strokeWeight(1);
//                 stroke(70,100,100);
//                 LineList[i][j] = line(i*20,j*20,idx_i*20,idx_j*20);
//             }
//         }
//     }
// }

function MarkLine(I,J){
    for(let k=0;k<3;k++){
        let i = I+pos[k][0] , j=J+pos[k][1];
        if( j<0 || j>=n ) continue;
        
        if( map(noise( i , j ,frameCount/Change_Speed ),0,1,0,100) < ColorRange ) continue;

        stroke( map(noise( i , j ,frameCount/Change_Speed ),0,1,70,140) ,100,100);
        line(I*span,J*span,i*span,j*span);
    }
}

function DeleteLine(){
    for(let i=0;i<n-2;i++){
        for(let j=0;j<n;j++){
            for(let k=0;k<3;k++){
                let ii=i+pos[k][0];
                let jj=j+pos[k][1];

                if( map(noise( ii*span , jj*span ,frameCount/Change_Speed ),0,1,0,100) < ColorRange ){

                    stroke(70,0,0);
                    line(i*span,j*span,ii*span,jj*span);
                }
            }
        }
    }
}
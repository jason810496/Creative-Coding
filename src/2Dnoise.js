var span = 20;
var r=8;
var sz;
var mn_sz;

function setup() {
    // createCanvas(400, 400);
    mn_sz = min( windowWidth , windowHeight );
    mn_sz = min( mn_sz , 800 );
    createCanvas( mn_sz , mn_sz );
    background(0);
    colorMode(HSB);
  }
  
  function draw() {
    for(let i = 0 ; i< width+10 ;i+=span){
        for(let j=0; j <height+10 ; j+=span){
            fill( random(70,120) , 100 ,map(noise(i,j,frameCount/10),0,1,0,100) );
            // fill( map(noise(i,j,frameCount/10),0,1,0,255) ) ;
            circle(i,j,r);
        }
    }
  }
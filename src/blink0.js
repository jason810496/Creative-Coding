
var span = 30;
var r=10;
var sz;
var mn_sz;
var List = [];
var Seed = 20;

function setup() {
    // createCanvas(400, 400);
    mn_sz = min( windowWidth , windowHeight );
    mn_sz = min( mn_sz , 800 );
    createCanvas( mn_sz , mn_sz );
    background(0);
    colorMode(HSB);

    CreateDot();
  }
  
function draw() {

    List.forEach(ele => {
        fill( map(noise( ele.y , ele.x ,frameCount/Seed),0,1,170,315) , 100 ,map(noise( ele.x , ele.y ,frameCount/Seed),0,1,30,100) );
        circle( ele.x , ele.y , r);
    });
}

function CreateDot(){
    for(let i = 0 ; i< width+10 ;i+=span){
        for(let j=0; j <height+10 ; j+=span){
            List.push({
                x: i,
                y:j
            });
        }
    }
}
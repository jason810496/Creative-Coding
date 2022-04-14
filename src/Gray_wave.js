var DotList =  []

function setup(){
    createCanvas(800, 800);
    noStroke()
  //   background(0);
    let SpanX = 5 ;
    let SpanY = 10;
    let Shift = 100;
    
  //   noStroke()
    
  // create dot 
    for(let y=200;y< height ; y+=SpanY){
      let shiftX = (noise( y/10 ,y/10)-0.5 )*Shift
      for( let i=0;i<width+Shift ; i+= SpanX){

        DotList.push(CreateDot(i+shiftX, y + Shift , i) );
      }
    }
      
  }
  
function draw(){
    
    // for(let y=200;y< height ; y+=SpanY){
    //     let shiftX = (noise( y/10 ,y/10)-0.5 )*Shift
    //     for( let i=0;i<width+Shift ; i+= SpanX){
        
        
    //     fill( map(random(0,1) ,0,1 ,0,255 ) );
    //     // rect(i,0,Span,height/2);
    //     let Size = random(5,10);
    //     ellipse(i+shiftX ,sin(i/50+frameCount/5)*20 + y + Shift, Size ,Size );
    //     }
    // }
    background(0);
    DotList.forEach(ele => {
        fill(ele.clr);
        circle(ele.x,ele.y+sin(frameCount/5 + ele.ith/50)*20 , ele.sz);
    });
}

function CreateDot(x,y,i){
    return {
        x:x,
        y:y,
        clr:color(map(random(0,1) ,0,1 ,0,255 )),
        sz:random(5,10),
        ith:i
    };
}
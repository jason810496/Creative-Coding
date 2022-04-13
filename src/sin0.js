var K = 250;
var Scale = 4;
var Count = 230;
var flag = false;
var Total = 20;
var Total_mid_circle =5;
var Span = 6;
var circleList = []

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  colorMode(HSB);
  shearX(60);
  translate(width/2,height/2);
  
  for( let i=0;i<Total_mid_circle ; i++){
    circleList.push( random(15,30) );
  }
}
  
function draw() {
  
  
  blendMode(BLEND);
  translate(width/2,height/2);
  // rotate(frameCount);
  // shearX(-30);
  scale( 2 , 1);
  background(0);
  noFill();
  
  // middle line
  let Line_clr = color('white');
  Line_clr.setAlpha(random(150,255));
  stroke( Line_clr );
  strokeWeight( noise(frameCount/50 ,10)*7 );
  line(0, -height/2, 0, height/2);
  
  // middle circle
  noFill();
  strokeWeight(1);
  for(let i=0;i<Total_mid_circle;i++){
    circle( 0 ,sin(i*10+frameCount*2)*20 ,circleList[i] );
  }
  
  strokeWeight(1);
  
  let R = 120;
  
  Calculate_Color()
  for(let k=0; k< Total ;k++){
      let i = k * Span;
      // blendMode(SCREEN);
      stroke( (frameCount/5+i/2)%360 , 80 , 80);
      circle( 0 ,sin(i/Scale+frameCount)*map(i,5,R,K,0)-2,i*3);
      circle( 0 ,sin(i/Scale+frameCount+90)*map(i,5,R,K,0)+2,i*3);
      circle( 0 ,sin(i/Scale+frameCount+180)*map(i,5,R,K,0)+2,i*3);
      circle( 0 ,sin(i/Scale+frameCount+270)*map(i,5,R,K,0)+2,i*3);
  }
}

function Calculate_Color(){
  if(flag ){
    Count+=0.5;
  }
  else{
    Count-=0.5;
  }
  if(Count>330 && flag){
    flag=false;
  }
  if(Count<230 && !flag){
    flag=true;
  }
}
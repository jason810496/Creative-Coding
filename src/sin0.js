function setup() {
    createCanvas(400, 400);
    angleMode(DEGREE);
    shearX(60);
  }
  
  function draw() {
    background(0);
    noFill();
    stroke(200);var K = 250;
    var Scale = 4;
    var Count = 230;
    var flag = false;
    var Total = 20;
    var Span = 6;
    
    function setup() {
      createCanvas(800, 800);
      angleMode(DEGREES);
      colorMode(HSB);
      shearX(60);
      translate(width/2,height/2);
    }
      
    function draw() {
      
      
      blendMode(BLEND);
      translate(width/2,height/2);
      // rotate(frameCount);
      // shearX(-30);
      scale( 2 , 1);
      background(0);
      noFill();
      
      strokeWeight(1);
      
      let R = 120;
      
      Calculate_Color()
      for(let k=0; k< Total ;k++){
          let i = k * Span;
          blendMode(SCREEN);
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
    strokeWeight(3);

    for(let i=0;i<120;i+=10){
        circle(i,sin(frameCount)*10,i*5);
    }
  }
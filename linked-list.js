var obj;

function setup() {
    createCanvas( windowWidth , windowHeight );
    
    obj = new List( 0 , 0 );
}



function draw() {
    translate( windowWidth/2 , windowHeight/2 );
    background(0);
    obj.Update();
}

class List {
    constructor( x,y ){
        this.pos = {
            x:x,
            y:y,
        };
      
        this.arr = [];
        this.n = int(random(5,10));

        for(let i=0;i<this.n;i++){
          this.arr.push( new Cube(i*10,0) );
        }
    }

    Update(){
      for(let i=this.n-1;i>=1;i--){
        this.arr[i].pos = this.arr[i-1].pos;
      }
      let newX = noise( this.pos.x /100 , this.pos.y/100 , frameCount  );
      let newY = noise( this.pos.x/100 , this.pos.y/100 , -frameCount );
      this.arr[0].pos.x = newX;
      this.arr[0].pos.y = newY;

        push();
        fill(200);
      for(let i=0;i<this.n;i++){
          this.arr[i].Update();

          if( i!=this.n-1 ){
              push();
                stroke(200);
                strokeWeight(10);
                line( this.arr[i].pos.x , this.arr[i].pos.y , this.arr[i+1].pos.x , this.arr[i+1].pos.y );
              pop();
          }
      }

      pop();
    }
}

class Cube {
    constructor( x,  y){
        this.pos = {
            x:x,
            y:y,
        };

        this.w = 50;
        this.h = 50;

    }

    Update(){
        rect( this.x-this.w/2 , this.y-this.h/2 , this.x+this.w/2 , this.y+this.h/2 );
    }
}
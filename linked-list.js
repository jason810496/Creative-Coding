var obj;

function setup() {
    createCanvas( windowWidth , windowHeight );
    
    obj = new List( 0 , 0 );
}



function draw() {
    background(0);
    obj.Update();
}

class List {
    constructor( x,y ){
        this.n = int(random(10,15));
        this.x = [];
        this.y = [];
        this.val = [];
        this.strokeWeight=5;
        this.stroke =200;
        this.segLen = 50;
        this.textSize = 20;
      
        this.w = 30 ;
        this.h = 30;

        for( let i=0;i<this.n;i++){
            this.x.push( 0 );
            this.y.push( 0 );

            let num = int(random(15,90));
          
//           console.log( num.toString() ,typeof( num.toString() ) );
            this.val.push( num.toString() );
        }
    }

    Update(){
        stroke( this.stroke );
        strokeWeight( this.strokeWeight );
        this.Draw( 0 , mouseX , mouseY );
        for( let i=0; i< this.n-1 ; i++ ){
            this.Draw( i+1 , this.x[i] , this.y[i] );
        }
    }

    Draw( i ,xin ,yin ){
        const dx = xin - this.x[i];
        const dy = yin - this.y[i];
        const angle = atan2( dy , dx );
        this.x[i] = xin -cos( angle )*this.segLen;
        this.y[i] = yin -sin( angle )*this.segLen;
        this.Segment( this.x[i] , this.y[i] , angle ,i );
    }

    Segment( x ,y ,a ,i ){
        push();
            translate(x,y);
            rotate( a );
            line( 0,0,this.segLen , 0);

            push();
                
                noStroke();
                fill(225);
                rect(-this.w/2,-this.h/2,this.w,this.h);
      
                fill( 0 );
                // console.log( this.val[i] );
                textSize( this.textSize );
                text( this.val[i] , -this.w/2+this.textSize/4, this.textSize/2 );
                
            pop();
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
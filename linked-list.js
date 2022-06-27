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
        this.segLen = 30;

        for( let i=0;i<this.n;i++){
            this.x.push( 0 );
            this.y.push( 0 );
        }
    }

    Update(){
        stroke(200);
        strokeWeight(10);
        this.Draw( 0 , mouseX , mouseY );
        for( let i=0; i< this.n-1 ; i++ ){
            this.Draw( i+1 , this.x[i] , this.y[i] );
        }
    }

    Draw( i ,xin ,yin){
        const dx = xin - this.x[i];
        const dy = yin - this.y[i];
        const angle = atan2( dy , dx );
        this.x[i] = xin -cos( angle )*this.segLen;
        this.y[i] = yin -sin( angle )*this.segLen;
        this.Segment( this.x[i] , this.y[i] , angle );
    }

    Segment( x ,y ,a ){
        push();
            translate(x,y);
            rotate( a );
            line( 0,0,this.segLen , 0);
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
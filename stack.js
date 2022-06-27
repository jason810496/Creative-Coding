var ListofList;
var N;

function setup() {
    createCanvas( windowWidth , windowHeight );
    
    ListofList = [];
    N = random( 3,5 );

    let cut = windowHeight/N;

    for(let i=0;i<N;i++){
        ListofList.push(
            new List( random(100,windowWidth-100) ,cut + i*cut*0.7  , (i%2===0 ? true:false))
        );
    }

}



function draw() {
    background(0);
    ListofList.forEach(element => {
        element.Update();
    });
}

class Stack {
    constructor( posX,posY,f){
        this.posX = posX;
        this.posY = posY;
        this.origY=posY;
        this.n = int(random(3,10));
        this.x = [];
        this.y = [];
        this.val = [];
        this.strokeWeight=5;
        this.stroke = color(200,150);
        this.segLen = 50;
        this.textSize = 20;
        this.flag = f;
      
        this.w = 30 ;
        this.h = 30;

        for( let i=0;i<this.n;i++){
            this.x.push( 0 );
            this.y.push( 0 );
            this.val.push( int(random(15,90)));
        }
    }

    Update(){
        push();
            translate( this.posX , this.posY );

            stroke( this.stroke );
            strokeWeight( this.strokeWeight );
            
            
        pop();
    }

    Draw( i ){
        
    }

    Segment( x ,y ,a ,i ){
        push();
            translate(x,y);
            rotate( a );
            if( i!=0) line( 0,0,this.segLen , 0);

            push();
                
                noStroke();
                fill(225);
                rect(-this.w/2,-this.h/2,this.w,this.h);
      
                fill( 0 );
                // console.log( this.val[i] );
                textSize( this.textSize );
                textStyle(BOLD);
                text( this.val[i] , -this.w/2+this.textSize/5, this.textSize/2 );
                
            pop();
        pop();
    }
}
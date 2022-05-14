
class Ship{
    constructor(){
        this.posX=0;
        this.posY=0;
        this.body_width = 80;
        this.body_height = 200;
        this.engine_width = 30;
        this.engine_height = 50;
        // this.wing = { 10 , 0 ,} (10,0) (50,30) (50,60) (10,60)
        // this.line = (50 , 10) (50,-20)
        // this.mid line = (0,5) (0,20)
        this.back_side_width = 100 ; 
        this.back_side_height= 5;
        // this.back rect (0,50) (40,50) (30,70) (0,70)
        this.front_side_width = 100;
        this.front_side_height = 10;
        // this.front rect (0,-30) (40,-30) (35 ,-60) (0,-60)
    }
    
    Create(){
        rect( -this.body_width/2 ,  -this.body_height/2 ,this.body_width , this.body_height );
        let shift_engine_x = 20 ;
        rect( shift_engine_x -this.engine_width/2 , this.engine_height/2 , this.engine_width , this.engine_height );
        rect( -shift_engine_x -this.engine_width/2 , this.engine_height/2 , this.engine_width , this.engine_height );
    }
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    translate( width/2 , height/2 );
    Ship s = new Ship();

    s.Create()
}

function draw() {
    // background(220);
}

function CreateSpaceShip(){

}

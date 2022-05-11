/* Background Part */
var R_size = 0;
var C_size = 0;
var span = 100 ;
var dot_R = 10;
var dot_clr;

/* NetWork Part */
var StationList = [];
var TotalStation  = 50;
var LineColorList= "2d00f7-6a00f4-8900f2-a100f2-b100e8-bc00dd-d100d1-db00b6-e500a4-f20089".split("-").map(a=>"#"+a);
var LineList = [];
var min_sz;
var ScaleVar;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    // canvas.parent('sketch-container');

    /* Background Part */
    R_size = width / span + 1 ;
    C_size = height / span + 1;

    angleMode( DEGREES );

    stroke(255);
    strokeWeight(3);
    fill(255);
    noStroke();

    /* Network Ball Part */

    // min_sz = min( width , height );
	// ScaleVar = min_sz/800;
    ScaleVar= 1;
    // noStroke();

    // Create Station 
    for( let i=0;i<TotalStation ; i++){
        StationList.push( CreateStation( i ) );
    }

    // Create Line
    for(let i=0;i<TotalStation;i++){
        let cnt = random(0,5);

        for(let j=0;j<cnt ;j++){
                let ith = int(random(0,TotalStation-1) );

                let clr = color(random(LineColorList))
                clr.setAlpha(random(150,255))

                LineList.push({
                    A:i,
                    B:ith,
                    clr:clr
                })
        }
    }
}
  
function draw() {
    background(0);
    CreateLine();
    CreateDot();
    
    UpdateBall();

    UpdateMouse();
}

function CreateDot(){

    for(let i=0;i<R_size ; i++){
        for( let j =0 ; j<C_size ; j++){
            let x = i*span  , y=j*span ;
            if( i%3==0 && j%3==0){
                push();
                    translate( x, y );
                    rotate(45);
                    noFill();

                    stroke( 90 );
                    let cur_sz =  dot_R+ abs( 2*dot_R*sin(frameCount) );
                    rect( -cur_sz/2, -cur_sz/2 , cur_sz , cur_sz );

                    
                    stroke(255);
                    rect( -dot_R/2, -dot_R/2 , dot_R , dot_R);

                pop();
            }
            else{
                
                fill( 90 );
                circle( x ,y , dot_R);
            }
            
        }
    }
}

function CreateLine(){
    strokeWeight( 2 ) ;
    stroke( 50 );
    for( let i=1;i<R_size ;i++){
        if( i%3==0){
            
            line(i*span , 0 , i*span , height );
        }
    }

    for( let i=1;i<C_size ;i++){
        if( i%3==0){
            line( 0 , i*span , width , i*span);
        }
    }
}

function UpdateMouse(){
    textSize(20);
    fill( 255)
    textStyle(BOLD)
    push();
        
        let shift = 80 ;
        text( "X : " + mouseX+ (noise(frameCount/10)*10).toFixed(3) , shift , height - shift+33 );

        push();
            strokeWeight(3);
            stroke( 255 );
            line( 0 , height -shift +10  , width , height-shift +10 );
        pop();

        push();
            translate( shift , height - shift );
            rotate( -90 );
            text( "Y : " + mouseY+ (noise(frameCount/10)*10).toFixed(3) , 10 , -20 );

        pop();

        push();
            strokeWeight(3);
            stroke( 255 );
            line( shift-10 , 0 ,shift-10 , height );
        pop();
    pop();
}

function UpdateBall(){
    push();
        blendMode(BLEND);
        // background(0);
        StationList.forEach(ele => {
            noStroke()
            fill(ele.clr);
            ele.cur_x = ele.x+noise(frameCount/50 ,ele.x/5)*40;
            ele.cur_y =  ele.y+noise( ele.y/5 , frameCount/50)*40
            ellipse( ele.cur_x , ele.cur_y ,ele.sz , ele.sz);
        });

        blendMode(SCREEN);

        LineList.forEach( ele=>{
            stroke( ele.clr );
            line(StationList[ele.A].cur_x , StationList[ele.A].cur_y, StationList[ele.B].cur_x , StationList[ ele.B].cur_y );
        })
    pop();
}


function CreateStation( ith ){
    return{
        x : width/2+random(250*ScaleVar,350*ScaleVar)*cos(ith),
        y : height/2+random(250*ScaleVar,350*ScaleVar)*sin(ith),
        cur_x:0,
        cur_y:0,
        clr : color( random(180,255)),
        sz : random(10*ScaleVar,25*ScaleVar)
    };
}

function DrawStation(){
    // Draw Station 
    blendMode(BLEND);
    StationList.forEach(ele => {
        fill(ele.clr);
        ellipse(ele.x , ele.y ,ele.sz , ele.sz);
    });

    blendMode(SCREEN);
    // Draw Lines
    for(let i=0;i<TotalStation;i++){
        let cnt = random(0,5);

        for(let j=0;j<cnt ;j++){
                let ith = int(random(0,TotalStation-1) );

                let clr = color(random(LineColorList))
                // clr.setAlpha(150 + noise(frameCount/10,frameCount)*10)
                fill( clr );
                line(StationList[i].x , StationList[i].y, StationList[ ith ].x , StationList[ith].y );
        }
    }
}

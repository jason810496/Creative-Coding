var StationList = [];
var TotalStation  = 100;
var LineColorList= "2d00f7-6a00f4-8900f2-a100f2-b100e8-bc00dd-d100d1-db00b6-e500a4-f20089".split("-").map(a=>"#"+a);
// var LineColorList = ['red' , 'green' , 'blue']
var LineList = []


function setup() {
    frameRate(24);
    createCanvas(800, 800);
    background(0);
    let SpanX = 5 ;
    let SpanY = 10;
    let Shift = 100;

    noStroke();

    // Create Station 
    for( let i=0;i<TotalStation ; i++){
        StationList.push( CreateStation( i ) );
    }

    // DrawStation()


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

function draw(){

    blendMode(BLEND);
    background(0);
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
}

function CreateStation( ith ){
    return{
        x : width/2+random(250,350)*cos(ith),
        y : height/2+random(250,350)*sin(ith),
        cur_x:0,
        cur_y:0,
        clr : color( random(180,255)),
        sz : random(10,25)
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



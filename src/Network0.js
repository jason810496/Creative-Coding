var StationList = [];
var TotalStation  = 50;
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

    // Create Line
    for(let i=0;i<TotalStation;i++){
        let cnt = random(0,5);

        for(let j=0;j<cnt ;j++){
                let ith = int(random(0,TotalStation-1) );

                let clr = color(random(LineColorList))
                // clr.setAlpha(150 + noise(frameCount/10,frameCount)*10)
                // fill( clr );

                LineList.push({
                    A:i,
                    B:ith
                })
                // line(StationList[i].x , StationList[i].y, StationList[ ith ].x , StationList[ith].y );
        }
    }
    
}

function draw(){
    // Draw Station 
    blendMode(BLEND);
    background(0);
    StationList.forEach(ele => {
        fill(ele.clr);
        ellipse(ele.x+noise(frameCount/10 ,ele.x/5)*10 , ele.y+noise(frameCount/10 ,ele.y/5)*10 ,ele.sz , ele.sz);
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

function CreateStation( ith ){
    return{
        x : width/2+random(200,300)*cos(ith),
        y : height/2+random(200,300)*sin(ith),
        clr : color( random(200,255)),
        sz : random(5,20)
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



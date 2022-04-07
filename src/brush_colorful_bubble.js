var Total;
var Size;
var ColorList = ['red', 'green' ,'blue' ]

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	angleMode(DEGREES);
	Total=20;
	Size=3;
	noFill();
}

function draw() {
    
	translate(mouseX, mouseY);
    blendMode(BLEND)
	if (mouseIsPressed){
        blendMode(SCREEN)
        Blossom()
	}
}

function Blossom(){
  for(let i=0 ;i < Total ;i++){
    let clr = color(random(ColorList))
    clr.setAlpha(30 + (noise(frameCount/10,frameCount)-0.5)*20)
    stroke( clr )
    strokeWeight( Size )

    let ang = random(0,360)
    rotate(ang)
    for(let j = 0 , Fix=-30; j < random(1, 100); j++){
        ellipse( Fix+i*3, Fix+i*3, j * i *0.1, j * i * 0.1 );
    }
  }
}

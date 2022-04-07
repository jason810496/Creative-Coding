var Total;
var ColorList = ['red', 'green' ,'blue' ]

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	// angleMode(DEGREES);
	Total=30;
	
	// translate( width/2 , height/2 )
	for(let i=0 ; i<Total;i++){
		rotate(i*5)
		Stick()
	}
}

function draw() {
	translate( mouseX , mouseY )
    blendMode(BLEND)
	if (mouseIsPressed){
        blendMode(SCREEN)
		let clr = color(random(ColorList))
		clr.setAlpha(150 + noise(frameCount/10,frameCount)*10)
		stroke( clr )
		for(let i=0 ; i<Total;i++){
			rotate( i*5+frameCount/10)
			Stick(i)
		}
	}
}

function Stick(ith){
	let clr = color(random(ColorList))
	clr.setAlpha(150 + noise(frameCount/10,frameCount)*10)
	stroke( clr )
	
	let len = (sin(ith/5 + noise(frameCount)*3 )*40+100)
	beginShape()
		strokeWeight( map(noise(frameCount/10 , frameCount/5) , 0, 1 ,10,30) )
		for(var i=0; i<len; i++){
			let deltaX = (noise(i/100, ith , frameCount/100)-0.5)*40
			vertex( deltaX,i )
		}
	endShape()
}
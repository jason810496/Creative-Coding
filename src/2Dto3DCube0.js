/*
    example from https://openprocessing.org/sketch/880483

*/

var overAllTexture;
var colorList = "0b3954-087e8b-bfd7ea-ff5a5f-c81d25".split("-").map(a=>"#"+a);

function setup() {
  createCanvas(400, 400);
  
  /*  texture setup*/
  overAllTexture=createGraphics(width,height)
	
	overAllTexture.loadPixels()
	for(var i=0;i<width;i++){
		for(var o=0;o<height;o++){
			overAllTexture.set(i,o,color(0,noise(i/2,o/2,i*o/50)*50))
		}
	}
	overAllTexture.updatePixels()
  
	// x,y,w,h
	Cube( random(50,100) , random(300,300), random(50,100) , random(100,200))
	
  push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
  pop()
}

function draw() {
  // background(220);
}

function GetColor(){
	let colorScalar = random(1.4,2)
	let cc = color( random(colorList) )
	cc.setRed(cc._getRed()+random(-5,5))
	cc.setGreen(cc._getGreen()+random(-5,5))
	cc.setBlue(cc._getBlue()+random(-5,5))

	let ccLight = color(cc.toString())
	ccLight.setRed(cc._getRed()*colorScalar)
	ccLight.setGreen(cc._getGreen()*colorScalar)
	ccLight.setBlue(cc._getBlue()*colorScalar)

	let ccDark = color(cc.toString())
	ccDark.setRed(cc._getRed()/colorScalar)
	ccDark.setGreen(cc._getGreen()/colorScalar)
	ccDark.setBlue(cc._getBlue()/colorScalar)
	
	return [cc,ccLight,ccDark]
}

// x,y,width ,height ,color 
function Cube(posX , posY , w, h){
	push()
		translate(posX , posY )
		let colorSets = GetColor()
		let cc= colorSets[0],ccLight=colorSets[1],ccDark =colorSets[2]
	
		noStroke()
		fill(cc)
		rect(0,0,w,-h)
		push()
			noStroke()
			fill(ccLight)
			translate(0,-h)
			shearX(-PI/6)
			scale(1,0.5)
			rect(0,0,w,-w)
		pop()
		push()
			fill(ccDark)
			translate(w,0)
			shearY(-PI*2/6)
			scale(0.3,1)
			rect(0,0,w,-h)
		pop()
	pop()
}



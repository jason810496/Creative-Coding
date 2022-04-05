var overAllTexture;

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
  
  push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
  pop()
}

function draw() {
  // background(220);
}
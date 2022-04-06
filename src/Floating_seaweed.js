
var overAllTexture;
var colorList = "05668d-028090-00a896-02c39a-f0f3bd".split("-").map(a=>"#"+a);
var Total;
var RandomColorList = [];
var RandomPosList = [];
var RandomHeightList = [];
var RandomStrokeList = [];

function setup() {
  createCanvas(600, 600);
	
	Total=20;
	
	for(let i=0;i<Total;i++){
		let flag=noise(i , i/10 ,i*10 )
		let Rate = random(0.98 , 1.4 )
		let temp_c = color( random(colorList) )
		let c =color(temp_c.toString())
		
		if(flag <= 0.5 ){
			c.setRed(temp_c._getRed()/Rate)
			c.setGreen(temp_c._getGreen()/Rate)
			c.setBlue(temp_c._getBlue()/Rate)	
		}
		else{
			c.setRed(temp_c._getRed())
			c.setGreen(temp_c._getGreen())
			c.setBlue(temp_c._getBlue())	
		}
		RandomColorList.push( c) 
	}
	for(let i=0;i<Total;i++){
		RandomPosList.push( [ random(50,250), random(230,250) ] ) 
	}
	
	for(let i=0;i<Total;i++){
		RandomHeightList.push( random(150,300) ) 
	}
	
	for(let i=0;i<Total;i++){
		RandomStrokeList.push( random(10,35) ) 
	}
  
  /*  texture setup*/
  overAllTexture=createGraphics(width,height)
	
	overAllTexture.loadPixels()
	for(var i=0;i<width;i++){
		for(var o=0;o<height;o++){
			overAllTexture.set(i,o,color(0,noise(i/2,o/2,i*o/50)*50))
		}
	}
	overAllTexture.updatePixels()
  
//    push()
// 		blendMode(MULTIPLY)
// 		image(overAllTexture,0,0)
//   pop()
	
}

function draw(){
	push()
	// setup
		background(200)
		noFill()  
	// create obj function 
		for( let i=0 ; i<Total ;i++){
			push()
				CreateIthWave(i)
			pop()
		}
	pop()
	
	push()
		blendMode(MULTIPLY)
		// blendMode(SCREEN)
		image(overAllTexture,0,0)
	pop()
}

function CreateIthWave(ith){
	stroke( RandomColorList[ith] )
	let posX = RandomPosList[ith][0] , posY = RandomPosList[ith][1];
	translate(  posX, posY )
	let h = RandomHeightList[ith]
	beginShape()
		strokeWeight( RandomStrokeList[ith] )
		for(var i=0; i<h; i++){
			let deltaX = (noise(i/100+ith, frameCount/100 , ith*10 )-0.5)*50
			vertex(posX + deltaX, -i+posY )
		}
	endShape()
}









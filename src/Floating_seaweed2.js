
var overAllTexture;
var colorList = "05668d-028090-00a896-02c39a-f0f3bd".split("-").map(a=>"#"+a);
var Total;
var RandomColorList = [];
var RandomPosList = [];
var RandomHeightList = [];
var RandomStrokeList = [];

var BubbleList = [];
var BubbleColorList = [];

function setup() {
  createCanvas(800, 800);
	
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
		RandomPosList.push( [ width/2 + map(i,0,Total-1,-50,50), 700 ]) 
	}
	
	for(let i=0;i<Total;i++){
		RandomHeightList.push( random(200,400) ) 
	}
	
	for(let i=0;i<Total;i++){
		RandomStrokeList.push( random(10,35) ) 
	}

    /*  bubble list create */

    for(let i=0;i<Total ;i++){
        BubbleList.push({
            x:random(50,width-50),
            y:random(50 , height/2+100),
            clr: color(random(BubbleColorList)),
            size: random(10,20),
            wt:random(3,5)
        })
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

        DrawBubble()
	pop()
	
	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()
}

function CreateIthWave(ith){
	stroke( RandomColorList[ith] )
	let posX = RandomPosList[ith][0] , posY = RandomPosList[ith][1];
	
	let h = RandomHeightList[ith]+map(mouseY , 0 ,width , -10,10) 
	beginShape()
		strokeWeight( RandomStrokeList[ith] )
		for(var i=0; i<h; i++){
			let deltaX = (noise(i/100+ith, frameCount/100 , ith*10 )-0.5)*50
			vertex(posX+ deltaX + map(ith,0,Total-1,-15,15)*log(i), -i+posY )
		}
	endShape()
}

function DrawBubble(){
    noFill();
    for(let i=0;i<Total;i++){
        let B = BubbleList[i];
        stroke(B.clr);
        strokeWeight(B.wt);
        ellipse(B.x + cos(frameCount/10)*5 +random(-3,3),B.y + sin(frameCount/10)*5, B.size , B.size);
    }
}









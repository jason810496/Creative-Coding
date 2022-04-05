const ColorList = "f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0".split("-").map(a=>"#"+a)
var overAllTexture;

function setup() {
    createCanvas(800, 800);
    background(250);
    // translate( width/2 , height/2)
    /*  texture setup*/
    overAllTexture=createGraphics(width,height)

    overAllTexture.loadPixels()
    for(var i=0;i<width;i++){
        for(var o=0;o<height;o++){
            // overAllTexture.set(i,o,color(0,noise(i/2,o/2,i*o/50)*50))
              overAllTexture.set(i,o,color(0,noise(i,o,i*o)*50) )

            // overAllTexture.set(i,o,color(0, random(255) )

        }
    }
    overAllTexture.updatePixels()

    /*
     
         Draw some thing
         
    */
  
    for(let i=0;i<5000;i++){
        push()
          translate( width/2 , height/2)
          noStroke()
          rotate(i)
          translate(i,0)
          fill( random(ColorList) )
          rect(0,0,random(50), random(50))
        pop()
    }
    push()
        blendMode(MULTIPLY)
        image(overAllTexture,0,0)
    pop()
}

function draw(cnt) {
  // background(220);
}

function Create_Rect(cnt){
  
  // translate( width/2 , height/2);
  rotate(cnt)
  // draw postion 
  
  fill( random(ColorList) )
  // object
  rect(0,0,random(50)*cnt*0.01 , random(50)*cnt*0.01)
}
function draw() {
    // start draw in the middle of the screen 
    translate(width/2,height/2)
    rotate(frameCount)
    translate(frameCount,0)
    // change color by frame count  
    fill(frameCount*0.8 ,50 ,50)
    rect(0,0,50,50)
}
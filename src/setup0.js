function setup() {
    /* windowWidth , windowHeight are keyword */
	createCanvas(windowWidth, windowHeight);
    // Canvas size : 800px X 800px
    // createCanvas(800, 800);

    // bgc : (100,100,100)
	background(100);

    // bgc: (20,50,170)
    // background(20,50,170);

    //slow down the frameRate to make it more visible
    frameRate(10);
}

function draw() {

    // circle with R=20px
    let R = 20;
	circle(mouseX, mouseY, R);
}
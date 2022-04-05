function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {

    // circle with R=20px
    let R = 20;
	circle(mouseX, mouseY, R);
    // x,y, height , width
    rect(mouseX, mouseY, R ,R );
    // rect with radius
    rect(mouseX, mouseY, R ,R ,10);
}
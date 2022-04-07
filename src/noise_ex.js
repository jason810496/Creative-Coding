var ParticleList = []

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  background(230, 100, 50);
  for(let i=0;i<width ; i+=20){
    for(let j=0 ; j< height ; j+=20){
      ParticleList.push({
        x:i,
        y:j,
        clr: color( noise(i/5,j/5)*50 , 100 , noise(i,j,i*j/10)*250 ),
        sz: random(5,8)
      })
    }
  }
  
  console.log(ParticleList[0])
}

function draw() {
  background(230, 100, 50, 0.005);
  noStroke();
  for (let i=0 ;i < ParticleList.length ; i++){
    let p=ParticleList[i];
    fill(p.clr);
    circle(p.x, p.y, p.sz);
    p.x += noise(p.x / 100, p.y / 100, -1000) - 0.5;
    p.y += noise(p.x / 100, p.y / 100, 100) - 0.5;
  }
}
var PlantList = []
var ParticleList = []
var GrowSpeed = 2;
var PlantTotal = 20;
var ParticleTotal = 10;
var flag;
var TopLimit = 600;
function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  background(260, 64, 30);
  
  for(let i=0;i<PlantTotal ; i++){
      PlantList.push({
        x:width/2 + map(i,0,PlantTotal-1,-50,50),
        y:height,
        cur_x:0,
        cur_y:height,
        clr: color( random(0,20)+163 , 64 , 100 ),
        sz: random(10,20),
        Speed:random(0.9,1.2)
      })
  }

  // for(let i=0;i<ParticleTotal ; i++){
  //     ParticleList.push({
  //         x:width/2 + map(i,0,PlantTotal-1,-200,200) + random(-20,20),
  //         y:height/2 + random(-50,50),
  //         clr: color( random(0,20)+163 , 64 , 100 ),
  //         sz: random(10,20)
  //     })
  // }
  
  console.log(PlantList[0])
}

function draw() {
  
  // UpdateBubbles()
  if( flag ) return;
  
  for(let i=0;i<PlantList.length ;i ++){
    if( PlantList[i].cur_y< TopLimit){
      flag = true;
      return ;
    }
  }
  background(260, 64, 64, 0.005);
  noStroke();
  for (let i=0 ;i < PlantList.length ; i++){
    let p=PlantList[i];
    fill(p.clr);
    circle(p.cur_x, p.cur_y, p.sz);
    if(p.cur_y <400 ) continue;
    p.cur_x =p.x+ (noise(frameCount/100, 10, frameCount/100)-0.5)*5 + log(frameCount)*map(i,0,PlantTotal-1,-40,40) ;
    p.cur_y -= (noise(frameCount / 100, p.y / 100, 100)-0.5)*random(0.3,1)+ p.Speed;
    
    
  }
}

function UpdateBubbles(){
  push()
    noFill();
    for(let i=0;i<ParticleTotal; i++){
        let p = ParticleList[i];
        let dx = sin(frameCount)*50 + (noise(i,frameCount/10,p.sz) -0.5)*2;
        let dy = cos(frameCount)*80 + (noise(i,frameCount/10,p.sz) -0.5)*3;
        stroke( p.clr);
        strokeWeight(2);
        circle(p.x+dx , p.y+dy ,p.sz)
    }
  pop()
}
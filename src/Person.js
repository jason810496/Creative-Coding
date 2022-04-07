var overAllTexture;
var colorList = "0b3954-087e8b-bfd7ea-ff5a5f-c81d25".split("-").map(a=>"#"+a);
var SkinList = "ffedd8-f3d5b5-e7bc91-d4a276-bc8a5f-a47148-8b5e34-6f4518-603808-583101".split("-").map(a=>"#"+a);
var my_obj;
var Ang;

function setup() {
    Ang = PI/6 ;
    createCanvas(800, 800);

    /*  texture setup*/
    overAllTexture=createGraphics(width,height)

    overAllTexture.loadPixels()
    for(var i=0;i<width;i++){
        for(var o=0;o<height;o++){
            overAllTexture.set(i,o,color(0,noise(i/2,o/2,i*o/50)*50))
        }
    }
    overAllTexture.updatePixels()
	
	/*  create Person */

    var Myself = new Person( random(width/2-100 , width/2+100) , random(height/2+100 , height/2+200) );
    Myself.Create()

    push()
        blendMode(MULTIPLY)
        image(overAllTexture,0,0)
    pop()
}

// function draw() {
  // background(220);
// }

// return [cc,ccLight,ccDark]
// flag -> true:obj , false:skin
function GetColor(flag){
	let Scale = random(1.4,2)
	let cc = flag ? color( random(colorList) ):color( random(SkinList) )
	cc.setRed(cc._getRed()+random(-5,5))
	cc.setGreen(cc._getGreen()+random(-5,5))
	cc.setBlue(cc._getBlue()+random(-5,5))

	let ccLight = color(cc.toString())
	ccLight.setRed(cc._getRed()*Scale)
	ccLight.setGreen(cc._getGreen()*Scale)
	ccLight.setBlue(cc._getBlue()*Scale)

	let ccDark = color(cc.toString())
	ccDark.setRed(cc._getRed()/Scale)
	ccDark.setGreen(cc._getGreen()/Scale)
	ccDark.setBlue(cc._getBlue()/Scale)
	
	return [cc,ccLight,ccDark]
}


class LEG{
    constructor(w,h){
		this.w = w;
		this.h = h;
	}
}

class BODY{
    constructor(w,h,d,clr){
		this.w = w;
		this.h = h;
        this.d = d;
        this.clr = clr;
	}
}

class HAND_{
    constructor(w,h,d){
		this.w = w;
		this.h = h;
        this.d = d;
	}
}

class HEAD{
    constructor(w,h){
		this.w = w;
		this.h = h;
	}
}


class Person{
	// head , body , hand , leg : [ w , h ]
	constructor( xx, yy){
		// center X , center Y
		this.xx = xx;
		this.yy = yy;
        this.skin_clr = GetColor(false);
        this.Feet_span = 10;
		this.leg = new LEG(random(7,10) , random(40,60) );
        this.body = new BODY( random(40,50),random(30,50) , random(0.4,0.6) , GetColor(true) )
        this.hand = new HAND_(random(7,10) , random(50,60) ,random(0.8,1.2) )
        this.head = new HEAD( random(14,20) , random(14,20) )
	}
    
	CreateLegs(){
      let Leg_L = new CUBE(this.xx-this.Feet_span , this.yy , this.leg.w , this.leg.h , 1, this.skin_clr)
      Leg_L.Create()
      let Leg_R = new CUBE(this.xx+this.Feet_span , this.yy , this.leg.w , this.leg.h , 1, this.skin_clr)
      Leg_R.Create()
    }
    CreateBody(){
      let body = new CUBE(this.xx-this.body.w/2 , this.yy - this.leg.h , this.body.w , this.body.h , this.body.d , this.body.clr )
      body.Create()
    }
    CreateHand_L(){
      let Hand_L = new CUBE(this.xx-this.body.w/2-this.hand.w/2 , this.yy-this.leg.h-this.body.h+this.hand.h +random(5,10), this.hand.w , this.hand.h , this.hand.d, this.skin_clr)
      Hand_L.Create()
    }
  
    CreateHand_R(){
      let Hand_R = new CUBE(this.xx+this.body.w/2+this.hand.w/2, this.yy-this.leg.h-this.body.h+this.hand.h  +random(5,10), this.hand.w , this.hand.h , this.hand.d, this.skin_clr)
      Hand_R.Create()    
    }
    CreateHead(){
      let shift = random(1,3)
      let Head = new CUBE(this.xx-this.head.w/2-shift*0.3 , this.yy-this.leg.h-this.body.h -shift, this.head.w ,this.head.h , 1 , this.skin_clr )
      Head.Create()
    }
	Create(){
		this.CreateLegs()
        this.CreateHand_L()
        this.CreateBody()
        this.CreateHand_R()
        this.CreateHead()
      
	}
}

class CUBE{
	//	posX ,posY , Width , Height , Deep , Color
	constructor( X , Y , W ,H ,D ,C){
		this.xx = X;
		this.yy = Y;
		this.ww = W;
		this.hh = H;
		this.dd = D ;
		this.cc = C;
	}
	
	Create(){
		push()
			translate( this.xx , this.yy )
			let clr_orig= this.cc[0],clr_light=this.cc[1],clr_dark =this.cc[2]

			noStroke()
			fill( clr_orig )
			rect(0,0,this.ww,-this.hh)
			push()
				noStroke()

				fill( clr_light )
				translate(0,-this.hh)
				shearX( -Ang )
				scale(1, sin(Ang)*this.dd )
				rect(0,0,this.ww,-this.ww)
			pop()
			push()
				fill( clr_dark )
				translate(this.ww,0)
				shearY( -2 * Ang )
				scale( 0.291*this.dd , 1)
				rect(0,0,this.ww,-this.hh)
			pop()
		pop()
	}
}




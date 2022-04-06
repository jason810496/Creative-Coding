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
	
	/*  create people */

    var Myself = new People( random(width/2-100 , width/2+100) , random(height/2+100 , height/2+200) );
    Myself.Create()

    push()
        blendMode(MULTIPLY)
        image(overAllTexture,0,0)
    pop()
}

function draw() {
  // background(220);
}

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

class SHOE{
	constructor(w,h,clr){
		this.w = w;
		this.h = h;
		this.clr = clr;
	}
}

class PANT{
    // flag : true-> short , false->long 
    constructor(w,h,clr,f){
		this.w = w;
		this.h = h;
        this.clr = clr;
        this.flag =(f>0.5 ? true:false);
	}
}



class LEG{
    constructor(w,h){
		this.w = w;
		this.h = h;
	}
}

class CLOTH{
	constructor(w,h,clr){
		this.w = w;
		this.h = h;
		this.clr = clr;
	}
}

class People{
	// head , body , hand , leg : [ w , h ]
	// cloth , pant , shoe -> obj : w,h,color
    // constructor( xx, yy, head , body , hand , leg , cloth , pant ,shoe)
	constructor( xx, yy){
		// center X , center Y
		this.xx = xx;
		this.yy = yy;
        this.ww = random(80,100);
        this.skin_clr = GetColor(false);
        this.Feet_span = 30;
		// this.head = head;
		// this.body = body;
		// this.hand = hand;
		this.leg = new LEG(random(7,10) , random(150,200) );
		// this.cloth = cloth;
		// this.pant = new PANT(this.ww , this);
		this.shoe = new SHOE(random(12,20) ,random(8,11) ,GetColor(true) );
	}

    CreatePants(){
        translate(-this.Feet_span/2,-this.leg.h)
        let pant_len = this.leg.h* (random(0,1) > 0.5 ? 0.45: 0.95 )
        let pant_ww = random(30,40)
        let pant_D =random(1,1.2)
        let pant_color = GetColor(true)
        let pant_L = new CUBE(this.xx-this.Feet_span , this.yy+pant_len , pant_ww,pant_len,pant_D , pant_color)
        pant_L.Create()
        let pant_R = new CUBE(this.xx+this.Feet_span , this.yy+pant_len , pant_ww,pant_len,pant_D, pant_color)
        pant_R.Create()
        let pant_M = new CUBE(this.xx-pant_ww, this.yy , pant_ww+2*this.Feet_span,random(40,50),pant_D, pant_color)
        pant_M.Create()
    }
	
	Create(){
		// shoe
		// console.log( CCCC )
        
        /*  shoes part */

        
        // left shoe
        let Shoe_L_D = random(2.5,3.5)
		let Shoe_L = new CUBE(this.xx-this.Feet_span , this.yy , this.shoe.w , this.shoe.h , Shoe_L_D , this.shoe.clr)
        Shoe_L.Create()
        // right shoe
        let Shoe_R_D = random(2.5,3.5)
		let Shoe_R = new CUBE(this.xx+this.Feet_span , this.yy , this.shoe.w , this.shoe.h , Shoe_R_D, this.shoe.clr)
        Shoe_R.Create()

        translate( this.shoe.w/2 , -this.shoe.h*random(1.5,2.5) )
        /*  legs part */
        let Leg_L = new CUBE(this.xx-this.Feet_span , this.yy , this.leg.w , this.leg.h , 1, this.skin_clr)
        Leg_L.Create()
        // right shoe
		let Leg_R = new CUBE(this.xx+this.Feet_span , this.yy , this.leg.w , this.leg.h , 1, this.skin_clr)
        Leg_R.Create()
        /*  pants part */
        this.CreatePants()
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




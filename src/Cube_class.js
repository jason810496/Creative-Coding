
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
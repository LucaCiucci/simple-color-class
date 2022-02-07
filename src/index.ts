
export class Color {
	public r : number = 0;
	public g : number = 0;
	public b : number = 0;
	public a : number = 0;
  
	constructor(_R_or_? : number, _g? : number, _b? : number, _a? : number) {
		this.r = this.g = this.b = 0;
		this.a = 1;
		if (typeof _R_or_ === 'number') {
			this.r = _R_or_;
			if (typeof _g === 'number') { this.g = _g; }
			if (typeof _b === 'number') { this.b = _b; }
			if (typeof _a === 'number') { this.a = _a; }
		}
	}
  
	encode() : string {
		let clamp = (x : number) => Math.min(1, Math.max(0, x));
		let hexify = (x : number) => decimalToHex(Math.round(clamp(x) * 255), 2);
		return "#" + hexify(this.r) + hexify(this.g) + hexify(this.b) + hexify(this.a);
	}
  
	static valueOf(_R_or_? : number, _g? : number, _b? : number, _a? : number) : Color {
		let c = new Color(_R_or_, _g, _b, _a);
		return c;
	}

	static RED : Color = new Color(1, 0, 0);
	static GREEN : Color = new Color(0, 1, 0);
	static BLUE : Color = new Color(0, 0, 1);
	static WHITE : Color = new Color(1, 1, 1);
	static BLACK : Color = new Color(0, 0, 0);
	static TRANSPARENT : Color = new Color(0, 0, 0, 0);
}
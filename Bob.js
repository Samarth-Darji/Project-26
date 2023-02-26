class Bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			'restitution':1,
			'friction':0.3,
			'density':0.8

			
			}
		this.x=x;
		this.y=y;
		this.r=25;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS);
			strokeWeight(2);
			fill("red")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
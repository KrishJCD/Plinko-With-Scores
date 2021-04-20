class Plinko
{
    constructor(x,y)
    {
        var options={
            isStatic:true,
            friction:0,
            restitution:1
        }
        this.r=7;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};
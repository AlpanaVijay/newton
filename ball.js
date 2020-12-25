class Ball{
    constructor(x,y,r){
        var options={
    isStatic:false,
    restitution:0.3,
     friction:0.5,
     density:1.2    
        }

        this.body=Bodies.circle(x,y,(r-20)/2,options)
        this.r = r;
        World.add(world,this.body)
    }

    display(){
     var ballposition=this.body.position;

     push()
     translate(ballposition.x,ballposition.y);
     rectMode(CENTER)
     fill ("yellow")
     ellipse(0,0,this.r,this.r)
     pop()
    }
}
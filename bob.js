class bob{    
    constructor(x,y,r){
      var options = {
          isStatic: false,
          friction: 0,
          density: 4,
          restitution:1
      }
       this.body = Bodies.circle(x,y,r,options)
       this.radius = r;
       World.add(world,this.body)
    }    
    display(){
        
        fill("yellow");
        var p = this.body.position;
        var a = this.body.angle;
       // translate(this.body.position.x, this.body.position.y);
      //  rotate(a);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        
    }
 }
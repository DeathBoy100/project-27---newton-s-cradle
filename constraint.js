class rope{
    constructor(body1,body2, x1, y1){
        this.offsetX=x1;
        this.offsetY=y1;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:x1, y:y1}
            
        }
    //this.pointB = pointB    
    this.rope = Constraint.create(options);
    World.add(world,this.rope)
    }

      
    display(){
         
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position   
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)
     }
    }

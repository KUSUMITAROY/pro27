class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x: this.offsetX,y:this.offsetY}
           // stiffness: 0.04,
           // length: 10
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
      var pointA = this.Rope.bodyA.position
      var pointB = this.Rope.bodyB.position
      strokeWeight(1)

     //var Anchor2X = pointB.x+this.offsetX
     //var Anchor2Y = pointB.y+this.offsetY
     line (pointA.x,pointA.y, pointB.x+this.offsetX,pointB.y+this.offsetY);
     //line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    
}
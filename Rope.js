class Rope{
    constructor(bodyA, bodyB, pointA, pointB){
        this.pointA = pointA;
        this.pointB = pointB;


        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:this.pointA, y:this.pointB}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);

        var Po1X = pointA.x;
        var Po1Y = pointA.y;

        var Po2X = pointB.x+this.pointA;
        var Po2Y = pointB.y+this.pointB;

        line(Po1X, Po1Y, Po2X, Po2Y);
    }
}
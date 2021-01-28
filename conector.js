class Constlog {
    constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:0.05,
        length:400
    
    }
    this.constlog = Constraint.create(options);
    World.add(world, this.constlog);

}
display(){
    var pointA = this.constlog.bodyA.position;
    var pointB = this.constlog.bodyB.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
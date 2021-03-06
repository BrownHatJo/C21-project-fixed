class Ball{
    constructor(x, y, radius){
        var options = {
            isStatic: false, 
            restitution: 0.3,
            friction:0,
            density:0.05
        }
        this.body = Bodies.circle(x, y, radius/2, options)
        World.add(world, this.body)
        this.radius = radius
    }
    display(){
        var pos = this.body.position
        push()
        ellipseMode(CENTER)
        ellipse(pos.x, pos.y, this.radius)
        pop()
    }
}
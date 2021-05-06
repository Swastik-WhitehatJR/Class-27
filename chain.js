class Chain
{
    constructor(bodyA, bodyB, length, stiffness) 
    {
      var options = {
          bodyA : bodyA,
          bodyB : bodyB,
          length : length,
          stiffness : stiffness,
      }
      this.body = Constraint.create(options);
      World.add(world,this.body)
    }

    display() 
    {
      var pos =this.body.position;
      var bodyApos = this.body.bodyA.position;
      var bodyBpos = this.body.bodyB.position;

      push();
      strokeWeight(10);
      stroke("black");
      fill("black");
      line(bodyApos.x,bodyApos.y,bodyBpos.x,bodyBpos.y);
      pop();
    }
};
class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
         
      }
      this.body = Bodies.circle(x,y,r,options);
      this.width = r;
      this.height = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
     
      
    }
  };
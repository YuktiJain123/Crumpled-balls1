class Paper {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.3,
          frictin:0.5,
          density:1.2
      }
      this.radius=20;
      this.body = Bodies.circle(x,y,this.radius,options);
      
      World.add(world, this.body);
    }
    function keyPressed(){
      if (keyCode===UP_ARROW){
        Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
      }
    }
    display(){
      var pos =this.body.position;
     ellipse(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius,this.radius);
    }
  };